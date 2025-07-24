import React from 'react'
import "./general.css"

const SearchBar = ({
    title,
    setTitle,
}) => {
    const handleInput = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="searchbar-wrapper">
            <input
                placeholder='Search Movies'
                className="searchbar-input"
                onChange={
                    (e) => handleInput(e)
                }
            >
                {title}
            </input>
        </div>
    )
}

export default SearchBar