import React from 'react'

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      createdAt: null,
      gamesPlayed: null,
      totalCorrect: null,
      totalIncorrect: null,
      highScore: null,
      bestTime: null,
      correctPercentage: this.state.totalCorrect / (this.state.totalCorrect + this.state.totalIncorrect) * 100
    }
  }
  
}

export default UserInfo;