import React from 'react';
import _ from 'underscore';

const style = {
  'display' : 'flex',
  'flexDirection': 'column',
  'fontFamily' : 'Poppins'
}
//passing in: problemType, inProgressBool, inProgressBoolUpdate, problemTypeUpdate
class NavSideBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.inProgressBool){
      return (<span></span>)
    } else {
      return (
          <div style={style}>
          <div>
            <h1>QUIKMATHS</h1>
          </div>
          CHOOSE YOUR PATH:
            <h2 onClick={() => {this.props.startNewGame('+')}}>Addition</h2>
            <h2 onClick={() => {this.props.startNewGame('-')}}>Subtraction</h2>
            <h2 onClick={() => {this.props.startNewGame('*')}}>Multiplication</h2>
            <h2 onClick={() => {this.props.startNewGame('/')}}>Division</h2>
            <h2 onClick={() => {this.props.startNewGame(_.sample(['+','/', '*', '-']))}}>Random</h2>
          </div>
      )
   }
  }

}




export default NavSideBar;