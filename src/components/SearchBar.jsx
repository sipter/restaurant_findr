import React from "react";

export const SearchBar = ({ onChange }) => {
  return (
    <>
      <div className="search-input">
        <input
          placeholder="Search"
          className="search"
          type="text"
          onChange={onChange}
        />
      </div>
    </>
  );
};
