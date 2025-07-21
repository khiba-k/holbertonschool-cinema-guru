import React from 'react'
import "./general.css"

const Button = ({
    label,
    className,
    onClick,
    icon = null,
}) => {
    return (
        <div className={className} onClick={() => onClick}>{icon} {" "}{label}</div>
    )
}

export default Button