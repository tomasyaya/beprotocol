import { GET_USERS } from './actionType';
import apiService from '../service/apiService';

export const getUsers = () => async dispatch => {
  try {
    const tutors = await apiService.getUsers();
    
    dispatch({
      type: GET_USERS,
      payload: tutors
    })
  } catch(err) {
    console.log(err)
  }
}