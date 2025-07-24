import React, { useEffect, useState } from 'react'
import "./navigation.css"
import { set } from 'lodash';
import { useNavigate } from "react-router";
import axios from 'axios';
import Button from '../general/Button';
import { faClock, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Activity from '../Activity';

const SideBar = () => {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) return;

        axios.get('http://localhost:8000/api/activity', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log("Activity Response Data: ",response.data);
                setActivities(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName}`);
    }

    return (
        <nav className={`sidebar ${small ? 'small' : ''}`}
            onMouseEnter={() => setSmall(false)}
            onMouseLeave={() => setSmall(true)}
        >
            <ul className="nav-links">
                <li onClick={() => setPage("home")}
                    className={selected === 'home' ? 'active' : ''}
                >
                    <FontAwesomeIcon icon={faHome} />
                    {!small && <span className="label">Home</span>}
                </li>
                <li onClick={() => setPage("favorites")}
                    className={selected === 'favorites' ? 'active' : ''}
                >
                    <FontAwesomeIcon icon={faStar} />
                    {!small && <span className="label">Favorites</span>}
                </li>
                <li onClick={() => setPage("watchlater")}
                    className={selected === 'watchlater' ? 'active' : ''}
                >
                    <FontAwesomeIcon icon={faClock} />
                    {!small && <span className="label">Watch Later</span>}
                </li>
            </ul>
            {!small && (<Activity
                activities={activities.slice(0, 10)}
            />)}
        </nav>
    )
}

export default SideBar