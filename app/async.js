import { polyfill } from 'es6-promise';
import fetch from 'isomorphic-fetch';

export function saveSettingsToServer(config) {
  let req = new Request('http://localhost:3030/settings',{
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    body: JSON.stringify(config),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  fetch(req).then(res => {
    if(!res.ok){
      throw(err => {throw new Error(res.statusText);});
    }
  }).catch(err => {throw new Error(err);});
}
