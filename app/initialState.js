import { List, Map } from 'immutable';

export const INITIAL_STATE = Map({
  found: List(),
  computers: List(),
  apps: List(),
  settings: Map({
    AD: Map({
      url: '',
      baseDN: '',
      username: '',
      password: ''
    })
  }),
  view: Map({
    panel: 'settings',
    busy: false
  })
});
