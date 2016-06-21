import React from 'react';
import { FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveSettings } from '../actions';
import "../style/bootstrap.css";

class Settings extends React.Component {
  constructor(props){
    super(props);
    this.handleClickOK = this.handleClickOK.bind(this);
  }
  handleClickOK(e){
    e.preventDefault();

    let {dispatch} = this.props;
    dispatch(saveSettings({
      server: e.target[0].value,
      domain: e.target[1].value,
      user: e.target[2].value,
      password: e.target[3].value
    }));
    // this.props.saveSettings({
    //   server: e.target[0].value,
    //   domain: e.target[1].value,
    //   user: e.target[2].value,
    //   password: e.target[3].value
    // });

  }
  render() {
    return <div className="Settings">
      <form onSubmit={this.handleClickOK}>
        <h2>ActiveDirectory Settings</h2>
        <FormGroup controlId="ADSettings">
          <ControlLabel>Server</ControlLabel>
          <FormControl name="server" type="text" placeholder="server1" />

          <ControlLabel>Domain</ControlLabel>
          <FormControl type="text" placeholder="contoso.com" />

          <ControlLabel>User</ControlLabel>
          <FormControl type="text" placeholder="user1" />

          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" />
          <ButtonToolbar>
            <Button bsStyle="info" >Test</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button bsStyle="primary" type="submit" >OK</Button>
            <Button >Cancel</Button>
          </ButtonToolbar>
        </FormGroup>
      </form>

    </div>;
  }
}

export default connect()(Settings);

// url: 'ldap://bpr620.bpsb.local',
// baseDN: 'dc=bpsb,dc=local',
// username: 'jpublic@bpsb.local',
// password: 'Password1'
