import React from 'react'
import "./dashboard.css"
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Dashboard = ({
    userUsername,
    setIsLoggedIn
}) => {
    return (
        <BrowserRouter>
            <div className="dashboard-container">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <div className="dashboard-content">
                    <SideBar />
                    <div className="main-view">
                        <h1>Welcome to the Dashboard, {userUsername}!</h1>
                        <p>This is your personal space where you can manage your account and preferences.</p>
                        {/* Additional dashboard content can go here */}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dashboard