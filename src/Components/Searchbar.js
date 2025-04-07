import React, { useState } from "react";
import { Search } from "lucide-react";
import "../Cssfiles/Searchbar.css"; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button className="search-btn" onClick={handleSearch}>
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
