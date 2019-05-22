import React from 'react';
import { string } from 'prop-types';
import './studentCard.css';

const StudentCard = props => {
  const { name } = props;
  return(
    <div className="student-card-container">
      <div>
        <img src={require('../../assets/images/Student icon.png')} alt="studentIcon"/>
      </div>
      <p>{ name }</p>
    </div>
  )
}

StudentCard.propTypes = {
  name: string
}

export default StudentCard