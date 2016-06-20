import React from 'react';
import { connect } from 'react-redux';


// import "../style/bootstrap.css";

class FoundList extends React.Component {
  constructor(props){
    super(props);
    this.list = [];
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    let {list} = this;
    let name = e.target.name;
    let checked = e.target.checked;
    let index = list.indexOf(name);
    if(checked && index === -1){
      list.push(name);
    } else {
      if(index >= 0){
        list.splice(index, 1);
      }
    }    
  }
  render() {
    let foundList = this.props.found.map(computer => {
      let name = computer.get('name');
      return <li key={name}>
        <label>
          {name}
          <input type="checkbox" name={name} onChange={this.handleChange}/>
        </label>
      </li>;
    });
    return <ul>
      {foundList}
    </ul>;
  }
}

function mapStateToProps(state) {
  return {found: state.get('found')};
}

export default connect(mapStateToProps)(FoundList);
