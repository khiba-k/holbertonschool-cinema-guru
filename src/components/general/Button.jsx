import React from 'react'
import "./general.css"

const Button = ({
    label,
    className,
    onClick,
    icon = null,
}) => {
    return (
        <button className={className} onClick={onClick}>{icon} {" "}{label}</button>
    )
}

export default Button