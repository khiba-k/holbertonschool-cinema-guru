import React, { useState } from 'react'
import "./auth.css"
import Button from '../../components/general/Button';
import Register from './Register';
import Login from './Login';
import axios from 'axios';

const Authentication = ({
    setIsLoggedIn,
    setUserUsername
}) => {
    const [_switch, _setSwitch] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        console.log("Handle Submit gets triggered");
        console.log("username:", username);
        console.log("password:", password);
        event.preventDefault();
        try {
            if (_switch) {
                const token = await axios.post("http://localhost:8000/api/auth/login", {
                    username: username,
                    password: password
                })

                if (token) {
                    console.log("Access Token", token);
                    localStorage.setItem("accessToken", token.data.accessToken);
                    setIsLoggedIn(true);
                    setUserUsername(username);
                }

            } else {
                const token = await axios.post("http://localhost:8000/api/auth/register", {
                    username: username,
                    password: password
                })

                if (token) {
                    console.log("Access Token: ", token);
                    localStorage.setItem("accessToken", token.data.accessToken);
                    setIsLoggedIn(true);
                    setUserUsername(username);
                }
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }

    }

    return (
        <div className="auth-wrapper">
            <div className="auth-header">
                <Button
                    label={"Sign In"}
                    onClick={() => {
                        _setSwitch(true)
                    }}
                    className={`auth-toggle-btn ${_switch ? 'active' : ''}`}
                />
                <Button
                    label={"Sign Up"}
                    onClick={() => {
                        _setSwitch(false)
                    }}
                    className={`auth-toggle-btn ${!_switch ? 'active' : ''}`}
                />
            </div>
            <div className="auth-body">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div>
                        {

                            _switch ?
                                (<Login
                                    username={username}
                                    password={password}
                                    setUsername={setUsername}
                                    setPassword={setPassword}
                                />) :
                                (<Register
                                    username={username}
                                    password={password}
                                    setUsername={setUsername}
                                    setPassword={setPassword}
                                />)
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Authentication