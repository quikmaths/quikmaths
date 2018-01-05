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
          <h4>UserInfo</h4>
          <ul>
            <li>
              username: {this.props.username}
            </li>
            <li>
              gamesPlayed: {this.props.gamesPlayed}
            </li>
            <li>
              totalCorrect: {this.props.totalCorrect}
            </li>
            <li>
              totalIncorrect: {this.props.totalIncorrect}
            </li>
            <li>
              highScore: {this.props.highScore}
            </li>
            <li>
              bestTime: {this.props.bestTime}
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