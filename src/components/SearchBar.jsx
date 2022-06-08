import React from "react";

export const SearchBar = ({ onChange }) => {
  return (
    <>
      <div className="search-input">
        <input
          placeholder="type here your favorite Cuisine"
          className="search"
          type="text"
          onChange={onChange}
        />
      </div>
    </>
  );
};
