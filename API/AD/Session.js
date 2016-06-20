import ActiveDirectory from "ActiveDirectory";
import getADComputer from './getADComputer';

export default class session {
  constructor(config) {
    this.connection = new ActiveDirectory(config);
    this.baseDN = config.baseDN;
  }
  getComputers(){
    return getADComputer(this.connection,this.baseDN);
  }
}
