import { GET_USERS} from '../actions/actionType';

const initialState = {
  tutors: []
}

const dataReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch(type) {
    case GET_USERS:
      return {
        ...state,
        tutors: [...payload]
      }
    default:
      return {
        ...state
      }
  }
}

export default dataReducer;

