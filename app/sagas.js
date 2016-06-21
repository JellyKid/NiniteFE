import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { logConsole } from './actions';

import { saveSettingsToServer } from './async';

import { parseAD } from './helpers';
import socket from './socket';

const emit = (action, payload) => {
  socket.emit('action',{type: action, payload: payload}
);};

const action = type => {return {type: type};};

export function* saveSettings(payload){
  try {
    let config = yield call(parseAD, payload.settings);
    yield put(action('SAVE_SETTINGS'));
    yield call(saveSettingsToServer, config);
  }
  catch(err){
    yield put(logConsole(err));
  }
}

export function* settings(){
  yield takeEvery('SAVE_SETTINGS', saveSettings);
}

export default function* rootSaga(){
  yield [settings()];
}
