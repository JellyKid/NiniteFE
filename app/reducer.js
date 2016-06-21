import { INITIAL_STATE } from './initialState';
import {
  ADD_COMPUTER,
  GET_COMPUTER,
  REMOVE_COMPUTER,
  UPDATE_COMPUTER,
  UPDATE_FOUND_COMPUTERS,
  FIND_AD_COMPUTERS,
  LOG_CONSOLE } from './actions';
import { updateFoundComputers } from './sync';
import { findADComputersAsync } from './async';



export default function(state = INITIAL_STATE, action){
  let {dispatch} = state;
  switch (action.type) {
    case UPDATE_FOUND_COMPUTERS:
      return updateFoundComputers(state, action.computers);
    case LOG_CONSOLE:
      console.log(action.log);
      return state;
    default:
      return state;
  }
}
