import { List, Map } from 'immutable';
import { ADD_COMPUTER, GET_COMPUTER, REMOVE_COMPUTER, UPDATE_COMPUTER, UPDATE_FOUND_COMPUTERS, FIND_AD_COMPUTERS } from './actions';
import { updateFoundComputers } from './sync';
import { findADComputersAsync } from './async';

const INITIAL_STATE = Map({
  found: List(),
  computers: List(),
  apps: List(),
  AD: Map({
    url: 'ldap://bpr620.bpsb.local',
    baseDN: 'dc=bpsb,dc=local',
    username: 'jpublic@bpsb.local',
    password: 'Password1'
  })
});

export default function(state = INITIAL_STATE, action){
  let {dispatch} = state;
  switch (action.type) {
    case UPDATE_FOUND_COMPUTERS:
      return updateFoundComputers(state, action.computers);
    default:
      return state;
  }
}
