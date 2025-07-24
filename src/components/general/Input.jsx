import React from 'react'
import "./general.css"

const Input = ({ label, type, className, value,
    setValue, icon = null, inputAttributes = null
}) => {

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className={`input-wrapper ${className}`}>
            <label className="input-label">
                {icon && <span className="input-icon">{icon}</span>}
                {label}:
            </label>
            <div className="input-container">
                <input
                    className="input-field"
                    type={type}
                    value={value}
                    onChange={(e) => handleInput(e)}
                    {...inputAttributes}
                ></input>
            </div>
        </div>
    )
}


export default Input