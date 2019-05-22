import { GET_TUTORS, SORT_TUTORS, SEARCH_TUTOR} from './actionType';
import apiService from '../service/apiService';

export const getTutors = () => async dispatch => {
  try {
    const tutors = await apiService.getTutors();
    dispatch({
      type: GET_TUTORS,
      payload: tutors
    })
  } catch(err) {
    console.log(err)
  }
}

export const sortTutors = term => dispatch => {
  dispatch({
    type: SORT_TUTORS,
    payload: term
  })
}

export const sortCity = (prop, arr) => dispatch => {
  prop = prop.split('.');
  let len = prop.length;
  let sortArr = arr.sort((a, b) => {
    let i = 0;
    while( i < len ) { a = a[prop[i]]; b = b[prop[i]]; i++; }
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
  });
  dispatch({
    type: SORT_TUTORS,
    payload: sortArr
  })
}

export const searchTutor = term => async dispatch => {
  try {
    const tutors = await apiService.getTutors();
    dispatch({
      type: SEARCH_TUTOR,
      term,
      payload: tutors
    })
  } catch(err) {
    console.log(err)
  }
}

