import React from 'react';
import { connect } from 'react-redux';
import { string, bool } from 'prop-types';
import { sortTutors, sortCity } from '../../actions/actions';

const SortButton = props => {

  const { text, sortTutors, sortCity, tutors, status } = props;
  
  const handleClick = status ? () => sortTutors('name') : () => sortCity("address.city", tutors);
  
  return(
    <button onClick={ handleClick }>
      { text }
    </button>
  )
}

const mapStateToProps = state => {
  return{
    tutors: state.data.tutors
  }
}

SortButton.propTypes = {
  status: bool,
  text: string
}

export default connect(mapStateToProps, { sortTutors, sortCity })(SortButton);