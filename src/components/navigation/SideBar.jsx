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
                setActivities(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [activities])

    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(`/${pageName}`);
    }

    return (
        <nav>
            <ul>
                <li>
                    <Button
                        icon={<FontAwesomeIcon icon={faHome} />}
                        label={"Home"}
                        onClick={() => setPage("home")}
                    />
                </li>
                <li>
                    <Button
                        icon={<FontAwesomeIcon icon={faStar} />}
                        label={"Favorites"}
                        onClick={() => setPage("favorites")}
                    />
                </li>
                <li>
                    <Button
                        icon={<FontAwesomeIcon icon={faClock} />}
                        label={"Watch Later"}
                        onClick={() => setPage("watchlater")}
                    />
                </li>
            </ul>
            <Activity
                activities={activities.slice(0, 10)}
            />
        </nav>
    )
}

export default SideBar