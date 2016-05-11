import db from "./schema";
import React from "react";
import ReactDOM from "react-dom";

var Computer = React.createClass({
  render: function(){
    return (
      <div className="computerBox">
        {this.props.name}
      </div>
    );
  }
});

var ComputerList = React.createClass({
  render: function(){
    return db.Computer.find(function(err,found){
      if(err){
        return (
          <div className="error">
            {err}
          </div>
        );
      }
      let list = [];
      for (var i = 0; i < found.length; i++) {
        list.push(
          <Computer name={found[i].name} />
        );
      }
    });
  }
});

ReactDOM.render(
  <Computer />,
  document.getElementById('app')
);
