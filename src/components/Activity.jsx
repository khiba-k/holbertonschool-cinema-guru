import React from 'react'
"./components.css"

const Activity = ({activities}) => {
    
    return (
        <div>
            <p>Latest Activities</p>
            <ul>
                {
                    activities.map(activity => (
                        <li key={activity.id}>
                            <span>{activity.description}</span>
                            <span className="timestamp"> - {activity.timestamp}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Activity