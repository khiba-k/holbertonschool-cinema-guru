import React from 'react'
import Input from '../../components/general/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/general/Button';
import "./auth.css"


const Login = ({
    username,
    password,
    setUsername,
    setPassword
}) => {
    return (
        <>
            <h3>Sign in with your account</h3>
            <Input
                label={"Username"}
                type={"text"}
                value={username}
                setValue={setUsername}
                icon={<FontAwesomeIcon icon={faUser} />}
            />

            <Input
                label={"Password"}
                type={"password"}
                value={password}
                setValue={setPassword}
                icon={<FontAwesomeIcon icon={faKey} />}
            />
            <Button
            label={"Sign In"}
            icon={<FontAwesomeIcon icon={faKey} />}
            type={"submit"}
            />
        </>
    )
}

export default Login