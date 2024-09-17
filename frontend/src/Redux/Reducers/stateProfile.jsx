import { SET_STATES } from '../actionTypes';

const initialState = {
  states: [
    { name: 'Assam' },
    { name: 'Odisha' },
    { name: 'Haryana' },
  ],
};

const stateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATES:
      return {
        ...state,
        states: action.payload,
      };
    default:
      return state;
  }
};

export default stateProfileReducer;