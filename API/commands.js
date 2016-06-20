"use strict";
const spawn = require('spawn-cmd').spawn;
const fs = require('fs');
var proc;

function machinestoFile(machines) {
  return new Promise(function(resolve, reject) {
    let list = machines.reduce((prev,curr) => {
      return prev += "\n" + curr;
    });
    fs.writeFile('machines.txt',list,(err) => {
      if (err) reject(Error(err));
      resolve('file:machines.txt');
    });
  });
}

function audit(machines) {
  return new Promise(function(resolve, reject) {
    machinestoFile(machines).then((file) => {
      run([
        '/audit',
        '/remote',
        file
      ]).then((res) => {
        resolve(parseResults(res));
      });
    });
  });
}

function parseResults(res) {
  res = res.split('\r\n');
  let title = res[1].split(',').slice(2);
  return res.slice(2).map((row) => {
    if(row == ''){
      return null;
    }
    let column = row.split(',');
    var pc = {};
    pc.name = column[0];
    pc.status = column[1];
    pc.software = {};

    let sw_status = column.slice(2);
    if(sw_status.length === title.length){
      for (var i = 0; i < title.length; i++) {
        if(sw_status[i] !== 'Not installed'){
          pc.software[title[i]] = sw_status[i];
        }
      }
    }
    return pc;
  }).filter((item) => { //filter null,undefined
    if(item){
      return item;
    }
  });
}

function run(switches) {
  return new Promise(function(resolve, reject) {
    if(proc) reject(Error('Process already running'));
    switches.push('/silent','.');
    proc = spawn('ninitepro.exe', switches);
    var buff = [];
    proc.stdout.on('data', (data) => {
      buff.push(data);
    });
    proc.stderr.on('data', (data) => {
      reject(Error(data));
    });
    proc.on('close', (code) => {
      resolve(buff.join(''));
      proc = null;
    });
  });
}

module.exports = {
  audit: audit
};
