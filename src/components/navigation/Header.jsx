import React from 'react'
import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Button from '../general/Button';

const Header = ({ userUsername, setIsLoggedIn }) => {

    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        window.location.reload();
    }

    return (
        <div>
            <h3>Cinema Guru</h3>
            <img src="https://picsum.photos/100/100" alt="Logo" className="logo" />
            <p>Welcome {userUsername}</p>
            <span>

                <Button className="logout-Button"
                    label={"Logout"}
                    icon={<FontAwesomeIcon icon={faBackward} />}
                    onClick={() => logout()}
                >Logout</Button>
            </span>
        </div>
    )
}

export default Header