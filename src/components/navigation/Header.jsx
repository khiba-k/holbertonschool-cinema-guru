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
        <nav className="dashboard-header">
            <div className="dashboard-left">Cinema Guru</div>
            <div className="dashboard-right">
                <img src="https://picsum.photos/100/100" alt="Logo" className="dashboard-avatar" />
                <p className="dashboard-welcome">Welcome {userUsername}</p>
                <span className="dashboard-logout" onClick={() => logout()}>
                    <FontAwesomeIcon icon={faBackward} /> Logout
                </span>
            </div>
        </nav>
    )
}

export default Header