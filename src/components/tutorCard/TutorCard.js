import React from 'react';
import { string } from 'prop-types';
import { data } from '../../helpers/fakeData';
import StudentCard from '../studentCard/StuendCard';
import './tutorCard.css';

const TutorCard = props => {

  const { name, city  } = props;

  const students = data.map(({name, id}) => <StudentCard key={id} name={ name } />)

  return(
    <div className="card-container">
      <img src={require('../../assets/images/User photo.png')} alt="tutorImage"/>
    <div className="card-info-container">
      <p className="tutor-name">{ name }</p>
      <p>City</p>
      <p className="tutor-city">{ city }</p>
      <p>Students so far</p>
      <div className="students-container">
        { students }
      </div>
    </div>
    </div>
  )
}

TutorCard.propTypes = {
  name: string,
  city: string
}

export default TutorCard;