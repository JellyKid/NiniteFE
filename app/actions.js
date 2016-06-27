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

export const LOG_CONSOLE = 'LOG_CONSOLE';
export function logConsole(log){
  return {
    type: LOG_CONSOLE,
    log: log
  };
}



export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export function saveSettings(settings){
  return {
    type: SAVE_SETTINGS,
    settings: settings
  };
}
