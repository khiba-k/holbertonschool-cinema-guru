import React from 'react'
"./components.css"

const Activity = ({ activities }) => {

    return (
        <div>
            <h4 className="activity-title">
                <span className="label">Latest Activities</span>
            </h4>
            <ul className="activity-list">
                {
                    activities.map(activity => (
                        <li
                            className="activity-item"
                            key={activity.id}>
                            <span className="activities-username">{username}</span> {actionText}{' '}
                            <span className="activities-title">{title}</span> to{' '}
                            <span className="activities-list">{listName}</span>{' '}
                            <span className="activities-date">– {formattedDate}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Activity