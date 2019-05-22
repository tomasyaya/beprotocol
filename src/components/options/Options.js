import React from 'react';
import './options.css';
import SortButton from '../buttons/SortButton';
import SearchBar from '../searchBar/SearchBar';

const Options = () => {
  return(
    <div className="options-container">
      <h2>Out Tutors</h2>
      <p>We have more than 100 tutors from various disciplines ready to match with you.</p>
      <div className="options-functions">
        <div className="sort-container">
          <p>Sort by</p>
          <SortButton status={ false } text="city" />
          <SortButton status={ true } text="name" />
        </div>
        <SearchBar />
      </div>
      <hr/>
    </div>
  )
}

export default Options