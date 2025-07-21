import React from 'react'
import "./general.css"

const SelectInput = ({ label, options, className,
    value, setValue
}) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    }

    return(
        <div className='input-and-label'>
            <label className='label'>
                {label}:
            </label>
            <select
            className='input-line'
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