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
        <div>
            {/* <label>
                Search
            </label> */}
            <input
                placeholder='Search Movies'
                className='search-bar'
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