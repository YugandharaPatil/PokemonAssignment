import React from 'react';

const types = [
  '', 'fire', 'water', 'grass', 'electric', 'bug', 'normal',
  'poison', 'fairy', 'ground', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon'
];

const SearchBar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type ? type.charAt(0).toUpperCase() + type.slice(1) : 'All'}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;