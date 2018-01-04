import React from 'react'

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
      numberCorrect: null,
      numberIncorrect: null,
      score: null,
      operator: null,
      username: null
    }
  }
  getLeaderboard() {
    
  }
  render() {
    return (
      <div>Leaderboard</div>
    )
  }
}

export default LeaderBoard;