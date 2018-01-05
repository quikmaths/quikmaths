import React from 'react'
import axios from 'axios';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.selectedTab === 'leaderboard') {
      return (
        <div>
          <h4>Leaderboard</h4>
          <ul>
            {this.props.recordsList.map((record, i)=> {
              return (<li key={i}>User:{record.username} Score:{record.score}</li>)
            })}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default LeaderBoard;