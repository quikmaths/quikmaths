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
}

export default LeaderBoard;