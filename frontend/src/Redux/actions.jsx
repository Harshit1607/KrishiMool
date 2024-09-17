import { SET_COMMODITIES, SET_STATES } from './actionTypes';

// Dashboard actions
export const setCommodities = (commodities) => ({
  type: SET_COMMODITIES,
  payload: commodities,
});

// State Profile actions
export const setStates = (states) => ({
  type: SET_STATES,
  payload: states,
});
