import { findADComputersAsync } from './async';

//Sync actions (Pure Functions, same in same out)
export const ADD_COMPUTER = 'ADD_COMPUTER';
export function addComputer(computer) {
  return {
    type: ADD_COMPUTER,
    computer: computer
  };
}

export const UPDATE_COMPUTER = 'UPDATE_COMPUTER';
export function updateComputer(computer) {
  return {
    type: UPDATE_COMPUTER,
    computer: computer
  };
}

export const GET_COMPUTER = 'GET_COMPUTER';
export function getComputer(computer) {
  return {
    type: GET_COMPUTER,
    computer: computer
  };
}

export const REMOVE_COMPUTER = 'REMOVE_COMPUTER';
export function removeComputer(computer) {
  return {
    type: REMOVE_COMPUTER,
    computer: computer
  };
}

export const UPDATE_FOUND_COMPUTERS = 'UPDATE_FOUND_COMPUTERS';
export function updateFoundComputers(list) {
  return {
    type: UPDATE_FOUND_COMPUTERS,
    computers: list
  };
}

//Logging for async actions
export function logAsyncAction(type){
  return {
    type: type
  };
}

//async actions
export const FIND_AD_COMPUTERS = 'FIND_AD_COMPUTERS';
export function findADComputers(socket) {
  return findADComputersAsync(socket, FIND_AD_COMPUTERS);
}
