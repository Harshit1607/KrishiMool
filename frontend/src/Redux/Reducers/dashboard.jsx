import { SET_COMMODITIES } from '../actionTypes';

const initialState = {
  commodities : [
    { name: 'ONION', price: '₹40/kg', change: '11.28%' },
    { name: 'TOMATO', price: '₹30/kg', change: '11.28%' },
    { name: 'TOOR', price: '₹59/kg', change: '11.28%' },
    { name: 'MOONG', price: '₹87/kg', change: '11.28%' },
  ]
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMODITIES:
      return {
        ...state,
        commodities: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
