import React, { useState } from 'react'
import "./auth.css"
import Button from '../../components/general/Button';
import Register from './Register';
import Login from './Login';

const Authentication = ({
    setIsLoggedIn,
    setUserUsername
}) => {
    const [_switch, _setSwitch] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form>
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