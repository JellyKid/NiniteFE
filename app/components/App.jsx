import React from 'react';
import { connect } from 'react-redux';
import AddFromAD from './AddFromAD';
import '../style/bootstrap.css';
import '../style/windows.css';
import '../style/fontAwesome.css';

class App extends React.Component {
  render(){
    return <AddFromAD />;
  }
}

export default App;
