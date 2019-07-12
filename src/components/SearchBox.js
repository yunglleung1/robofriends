import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return <input
  aria-label = 'Search Robots'
  type = 'search'
  placeholder = 'search robots'
  onChange = {props.onSearchChange}
  />;
}

export default SearchBox;
