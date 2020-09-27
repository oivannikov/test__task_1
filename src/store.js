import { createStore } from 'redux';

const initialState = {
  month: '',
  day: '',
  isFormOpen: false,
};
const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      return {
        ...state,
        month: action.payload,
      }
    case 'SET_DAY':
      return {
        ...state,
        day: action.payload,
      }
    case 'SET_FORM_OPEN':
      return {
        ...state,
        isFormOpen: action.payload,
      }
    default: return state;
  } 
};

const store = createStore(rootReducer, initialState);

export default store;
