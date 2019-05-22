import React from 'react';
import { connect } from 'react-redux';
import { searchTutor } from '../../actions/actions';
import './input.css';

const SearchBar = props => {
  const { searchTutor } =  props;
  return(
    <input className="search-input" type="text" placeholder="name" onChange={(e) => searchTutor(e.target.value)}/>
  )
}

export default connect(null, { searchTutor })(SearchBar);