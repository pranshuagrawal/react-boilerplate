import { combineReducers } from 'redux';
import * as TYPES from './types';
const initialState = {
  login: {
    data: null,
    loading: false,
    error: null,
  },
};

const performLoginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case TYPES.PERFORM_LOGIN:
      return { ...state, loading: true };
    case TYPES.PERFORM_LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case TYPES.PERFORM_LOGIN_FAILED:
      return { ...state, loading: false, error: action.error };
    case TYPES.CLEAR_PERFORM_LOGIN:
      return state;
    default:
      return state;
  }
};

const loginReducer = combineReducers({
  loginDetails: performLoginReducer,
});

export default loginReducer;