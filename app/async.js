import { updateFoundComputers, logAsyncAction } from './actions';
import { toJS } from 'immutable';

export function findADComputersAsync(socket, type) {
  return dispatch => {
    dispatch(logAsyncAction(type));
    socket.emit('findADComputers', {findADComputers:'findADComputers'});
  };
}
