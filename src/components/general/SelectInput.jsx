import React from 'react'
import "./general.css"

const SelectInput = ({ label, options, className = "",
    value, setValue
}) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className={`select-wrapper ${className}`}>
            <label className="select-label">
                {label}:
            </label>
            <select
                className="select-field"
                value={value}
                onChange={(e) => handleSelect(e)}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}


export default SelectInput