import { fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  computers: [],
  apps: [],
  settings: {
    AD: {
      url: '',
      baseDN: '',
      username: '',
      password: ''
    }
  },
  overlays: {
    AddFromAD: {
      show: true,
      found: ['pc1','pc2','pc3','pc4','pc5','pc6']
    }
  }
});
