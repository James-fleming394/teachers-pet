import React from "react";
import './Search.css';
import { useState } from "react";
import { useNavigate } from "react-router";
import searchLogo from '../assets/search.png'

const Search = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?query=${query}`);
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="search-button" type="submit"><img className="search-image" src={searchLogo} alt="searchbuttonimage"/></button>
            </form>
        </div>
    )
}

export default Search;

