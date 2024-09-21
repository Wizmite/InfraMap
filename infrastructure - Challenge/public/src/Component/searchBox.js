import React, { useState } from 'react';

const SearchBox = ({ searchHandler }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        searchHandler(searchTerm);
    };

    return (
        <div>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search for infrastructure" 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBox;
