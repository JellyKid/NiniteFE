import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { List, Map } from 'immutable';
import { FormGroup, ControlLabel, FormControl, Button, ButtonToolbar, Modal, Col, Clearfix } from 'react-bootstrap';

class AddFromAD extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      found: this.props.found,
      add: this.props.add,
      show: this.props.show
    };
    this.foundSelected = [];
    this.addSelected = [];
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.moveSelected = this.moveSelected.bind(this);
  }
  handleSelectChange(e){
    this[e.target.id] = Object.keys(e.target.options)
          .filter(key => e.target.options[key].selected)
          .map(key => e.target.options[key].value);
  }
  moveSelected(source, dest){
    if(this[source + 'Selected'].length === 0) return;

    let newSource = this.state[source]
      .filter(name => this[source + 'Selected'].indexOf(name) === -1);
    let newDest = this.state[dest]
      .concat(this[source + 'Selected']);

    this[source + 'Selected'] = [];

    this.setState({
      [source]: newSource,
      [dest]: newDest
    });
  }
  makeMachineList(machines, panel){
    return machines.sort().map(name => <option key={name} value={name}>{name}</option>);
  }
  render(){
    let found = this.state.found;
    let add = this.state.add;


    return <Modal show={this.state.show} bsSize="large">
      <Modal.Header closeButton>
        <Modal.Title>Add AD Computers</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Col sm={5}>
          <FormGroup controlId="foundSelected">
            <ControlLabel>Found Computers</ControlLabel>
            <FormControl componentClass="select" className="machinesPanel" multiple onChange={this.handleSelectChange}>
              {found.size > 0 ? this.makeMachineList(found) : ''}
            </FormControl>
          </FormGroup>
          <Button bsSize="large" bsStyle="primary" block>Find from AD</Button>
        </Col>

        <Col sm={2}>
          <Button bsSize="large" bsStyle="primary" block onClick={this.moveSelected.bind(this,'found','add')}>
            <i className="fa fa-angle-double-right fa-lg"></i>
          </Button>
          <Button bsSize="large" bsStyle="primary" block onClick={this.moveSelected.bind(this,'add','found')}>
            <i className="fa fa-angle-double-left fa-lg"></i>
          </Button>
        </Col>

        <Col sm={5}>
          <FormGroup controlId="addSelected">
            <ControlLabel>Computers to add</ControlLabel>
            <FormControl componentClass="select" className="machinesPanel" multiple onChange={this.handleSelectChange}>
              {add.size > 0 ? this.makeMachineList(add) : ''}
            </FormControl>
          </FormGroup>
        </Col>
        <Clearfix/>
      </Modal.Body>

      <Modal.Footer>
        <ButtonToolbar>
          <Button >Cancel</Button>
          <Button bsStyle="primary">Add Computers</Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>;
  }
}

function mapStateToProps(state) {
  return {
    show: state.getIn(['overlays','AddFromAD','show']),
    add: List(),
    found: state.getIn(['overlays','AddFromAD','found'])
  };
}

export default connect(mapStateToProps)(AddFromAD);
