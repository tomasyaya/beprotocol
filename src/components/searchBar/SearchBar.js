import React from 'react';
import { connect } from 'react-redux';
import { searchTutor } from '../../actions/actions';

const SearchBar = props => {
  const { searchTutor } =  props;
  return(
    <input type="text" placeholder="name" onChange={(e) => searchTutor(e.target.value)}/>
  )
}

export default connect(null, { searchTutor })(SearchBar);