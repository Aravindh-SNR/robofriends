import React from 'react';
import './searchBox.css';

//component to search for robots
const SearchBox = ({searchRobot}) => {
    return (
        <nav>
            <form className="searchBox">
                <input type="search" placeholder="Search robot by name..." onChange={searchRobot}/>
            </form>
        </nav>
    );
};

export default SearchBox;