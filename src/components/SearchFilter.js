import React, { useState } from "react";

function SearchFilter(props) {
  const handleChange = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="search"
        value={props.value}
        onChange={handleChange}
        placeholder="Search by title"
      />
    </div>
  );
}

export default SearchFilter;
