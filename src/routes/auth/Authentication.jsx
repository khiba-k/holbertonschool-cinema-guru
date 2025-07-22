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
                const  token = await axios.post("http://localhost:8000/api/auth/login", {
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
        <form onSubmit={handleSubmit}>
            <div>
                <Button
                    label={"Sign In"}
                    type="button"
                    onClick={() => {
                        _setSwitch(true)
                    }}
                />
                <Button
                    label={"Sign Up"}
                    type="button"
                    onClick={() => {
                        _setSwitch(false)
                    }}
                />
            </div>
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
    )
}

export default Authentication