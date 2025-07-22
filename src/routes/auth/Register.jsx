import React from 'react'
import "./auth.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'

const Register = ({
    username,
    password,
    setUsername,
    setPassword
}) => {
    return (
        <>
            <h3>Create a new account</h3>
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
                label={"Sign Up"}
                icon={<FontAwesomeIcon icon={faPlus} />}
                type="submit"
                onClick={() => {
                    console.log("Registering user:", username);
                }}
            />
        </>
    )
}

export default Register