import React from 'react'
import "./dashboard.css"
import Header from '../../components/navigation/Header'

const Dashboard = ({
    userUsername,
    setIsLoggedIn
}) => {
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
            <div className='dashboard-container'>
                <h1>Welcome to the Dashboard, {userUsername}!</h1>
                <p>This is your personal space where you can manage your account and preferences.</p>
                {/* Additional dashboard content can go here */}
            </div>
        </div>
    )
}

export default Dashboard