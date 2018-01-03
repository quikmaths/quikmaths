import React from 'react';
import _ from 'underscore';

const style = {
  'display' : 'flex',
  'flexDirection': 'column',
  'fontFamily' : 'Poppins'
}
//passing in: problemType, inProgressBool, inProgressBoolUpdate, problemTypeUpdate
const NavSideBar = (props) => (

    <div style={style}>
    <div>
      <h1>QUIKMATHS</h1>
    </div>
    CHOOSE YOUR PATH:
      <h2 onClick={()=> {props.startNewGame('+')}}>Addition</h2>
      <h2 onClick={() => {props.startNewGame('-')}}>Subtraction</h2>
      <h2 onClick={()=> {props.startNewGame('x')}}>Multiplication</h2>
      <h2 onClick={()=> {props.startNewGame('/')}}>Division</h2>
      <h2 onClick={()=> {props.startNewGame(_.sample(['+','/', 'x', '-']))}}>Random</h2>
    </div>
)









export default NavSideBar;