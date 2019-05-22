import React, {} from 'react';
import { connect } from 'react-redux';
import TutorCard from '../tutorCard/TutorCard';

import './tutorsDisplay.css';

const TutorsDisplay = props => {

  const { tutors } = props;

  const showTutors = tutors.map(({ name, id, address: { city } }) => <TutorCard key={ id } name={ name } city={ city } />);
 
  return(
    <div className="tutors-display-container">
      { showTutors }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    tutors: state.data.tutors
  }
}

export default connect(mapStateToProps, null)(TutorsDisplay);
