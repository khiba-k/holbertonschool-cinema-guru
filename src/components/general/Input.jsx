import React from 'react'
import "./general.css"

const Input = ({ label, type, className, value,
    setValue, icon = null, inputAttributes = null
}) => {

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='input-and-label'>
            <label className='label'>
                {icon && <span className="icon">{icon}</span>}
                {label}:
            </label>
            <input
                className={`input-line ${className}`}
                type={type}
                value={value}
                onChange={(e) => handleInput(e)}
                {...inputAttributes}
            ></input>
        </div>
    )
}


export default Input