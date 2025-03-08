import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex gap-2 shadow-md rounded-lg overflow-hidden bg-white">
        <input
          type="text"
          placeholder="Search by specialization or doctor name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          onClick={handleSearch}
          className="px-6 py-2 bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;