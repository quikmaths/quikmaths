import React from 'react'
import axios from 'axios';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.columnStyle = {
      textAlign: 'center'
    }
    this.tableStyle = {
      borderCollapse: 'collapse',
      marginTop: '-20px',
      marginBottom: '20px',
      marginLeft: '-20px',
      width: '100%'
    }
  }
  render() {
    if (this.props.selectedTab === 'user') {
      return (
        <table style={this.tableStyle}>
          <tbody>
            <tr>
              <td style={this.columnStyle}>Username</td>
              <td style={this.columnStyle}>{this.props.username}</td>
            </tr>
            <tr>
              <td style={this.columnStyle}>High Score</td>
              <td style={this.columnStyle}>{this.props.highScore}</td>
            </tr>
            <tr>
              <td style={this.columnStyle}>Best Time</td>
              <td style={this.columnStyle}>{this.props.bestTime}</td>
            </tr>
            <tr>
              <td style={this.columnStyle}>Games Played</td>
              <td style={this.columnStyle}>{this.props.gamesPlayed}</td>
            </tr>
            <tr>
              <td style={this.columnStyle}>Total Correct</td>
              <td style={this.columnStyle}>{this.props.totalCorrect}</td>
            </tr>
            <tr>
              <td style={this.columnStyle}>Total Incorrect</td>
              <td style={this.columnStyle}>{this.props.totalIncorrect}</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return null
    }
  }
  
}

export default UserInfo;