import {session} from '../API/AD';
import findAD from '../API/AD/getADComputer';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
let {expect, should} = chai;

chai.use(chaiAsPromised);

const config = {
  url: 'ldap://bpr620.bpsb.local',
  baseDN: 'dc=bpsb,dc=local',
  username: 'jpublic@bpsb.local',
  password: 'Password1'
};
const ad = new session(config);

describe('Active Directory', () => {
  it('creates a connection to ad', () => {
    expect(ad).to.have.property("baseDN").that.is.equal("dc=bpsb,dc=local");
  });
  it('finds more than 1 computer accounts', () => {
    // expect(findAD(ad.connection,ad.baseDN)).to.eventually.equal({bacon:'bsacon'});
    return Promise.resolve(findAD(ad.connection,ad.baseDN)).should.eventually.equal({bacon:'bsacon'});
  });

});
