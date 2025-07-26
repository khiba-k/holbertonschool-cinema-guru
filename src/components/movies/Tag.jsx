import React, { useState } from 'react'
import "./movies.css"

const Tag = ({
    genre,
    filter = null,
    genres,
    setGenres
}) => {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(genres.includes(genre));
    }, [genres, genre]);

    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter(g => g !== genre));
            setSelected(false);
        }
        else {
            setGenres([...genres, genre]);
            setSelected(true);
        }
    }

    return (
        <li
            className={`tag ${selected ? 'selected' : ''} ${filter ? 'filter-tag' : ''
                }`}
            onClick={() => { handleTag }}>
            {genre}
        </li>
    )
}

export default Tag