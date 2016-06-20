import { List, Map, fromJS } from 'immutable';

export function addComputer(state, computer) {
  return state;
}

export function updateFoundComputers(state, computers) {
  return state.set('found',fromJS(computers));
}
