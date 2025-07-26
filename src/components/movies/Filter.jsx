import React, { useState } from 'react'
import SearchBar from '../general/SearchBar'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput'
import "./movies.css"

const Filter = ({
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    sort,
    setSort,
    genres,
    setGenres,
    title,
    setTitle
}) => {
    const sortOptions = [
        { value: 'latest', label: 'Latest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'highestrated', label: 'Highest Rated' },
        { value: 'lowestrated', label: 'Lowest Rated' }
    ];

    const genreList = [
        Action, Drama, Comedy,
        Biography, Romance, Thriller,
        War, History, Sport, Sci-Fi,
        Documentary, Crime, Fantasy
    ]

    return (
        <div>
            <SearchBar title={title} setTitle={setTitle} />
            <Input label={"Min Year"} type={"text"} value={minYear}
                setValue={setMinYear} />
            <Input label={"Max Year"} type={"text"} value={maxYear}
                setValue={setMaxYear} />
            <SelectInput label={"Sort"} options={sortOptions}
                value={sort} setValue={setSort}
            />
            <ul>
                {genreList.map((genre, index) => {
                    <Tag key={index} genre={genre} setGenres={setGenres}
                        genres={genres} />
                })}
            </ul>
        </div>
    )
}

export default Filter