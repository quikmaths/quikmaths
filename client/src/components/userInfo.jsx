import React from 'react'
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.selectedTab === 'user') {
      
      return (
        <div>
          <h4>User Info</h4>
          <ul>
            <li>
              username: {this.props.username}
            </li>
            <li>
              Games Played: {this.props.gamesPlayed}
            </li>
            <li>
              Total Correct: {this.props.totalUserCorrect}
            </li>
            <li>
              Total Incorrect: {this.props.totalUserIncorrect}
            </li>
            <li>
              High Score: {this.props.highScore}
            </li>
            <li>
              Best Time: {this.props.bestTime}
            </li>
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
  
}

export default UserInfo;