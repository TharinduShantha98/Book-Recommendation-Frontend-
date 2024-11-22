import React, { useState } from 'react';

const BookSearch = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId) {
      onSearch(searchId);
      setSearchId('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="book-search">
      <input
        type="text"
        placeholder="Search Book by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default BookSearch;

