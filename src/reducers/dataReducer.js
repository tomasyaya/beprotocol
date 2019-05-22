import { GET_TUTORS, SORT_TUTORS, SORT_CITY, SEARCH_TUTOR } from '../actions/actionType';

const initialState = {
  tutors: []
}

const dataReducer = (state = initialState, action) => {
  const { payload, type, term } = action;
  switch(type) {
    case GET_TUTORS:
      return {
        ...state,
        tutors: [...payload]
      }
    case SORT_TUTORS:
      return {
        ...state,
        tutors: [...state.tutors].sort((a, b) => {
          if(a[payload] < b[payload]) { return -1; }
          if(a[payload] > b[payload]) { return 1; }
          return 0;
        })
      }
      case SORT_CITY:
      return {
        ...state,
        tutors: [...payload]
      }
    case SEARCH_TUTOR:
      return {
        ...state,
        tutors: [...payload].filter(tutor => tutor.name.includes(term))
      }
    default:
      return {
        ...state
      }
  }
}

export default dataReducer;

