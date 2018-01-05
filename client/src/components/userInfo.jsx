import React from 'react'
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.columnStyle = {
      paddingLeft: '20px'
    }
    this.tableStyle = {
      borderCollapse: 'collapse',
      marginTop: '-20px',
      marginBottom: '20px',
      width: '100%'
    }
  }
  render() {
    if (this.props.selectedTab === 'user' && this.props.toggleTab) {
      return (
        <div>
          <table style={this.tableStyle}>
            <tbody>
              <tr>
                <td>Username</td>
                <td>{this.props.username}</td>
              </tr>
              <tr>
                <td>High Score</td>
                <td style={this.columnStyle}>{this.props.highScore}</td>
              </tr>
              <tr>
                <td>Best Time</td>
                <td style={this.columnStyle}>{this.props.bestTime}</td>
              </tr>
              <tr>
                <td>Games Played</td>
                <td style={this.columnStyle}>{this.props.gamesPlayed}</td>
              </tr>
              <tr>
                <td>Total Correct</td>
                <td style={this.columnStyle}>{this.props.totalCorrect}</td>
              </tr>
              <tr>
                <td>Total Incorrect</td>
                <td style={this.columnStyle}>{this.props.totalIncorrect}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return null
    }
  }
  
}

export default UserInfo;