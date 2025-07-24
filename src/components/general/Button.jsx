import React from 'react'
import "./general.css"

const Button = ({
    label,
    className = "",
    onClick,
    icon = null,
    type = "button"
}) => {
    return (
        <button className={`general-button ${className}`} onClick={onClick} type={type}>{icon} {" "}{label}</button>
    )
}

export default Button