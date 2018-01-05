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
            <li>
              placeholder record
            </li>
            <li>
              placeholder record
            </li>
            <li>
              placeholder record
            </li>
            <li>
              placeholder record
            </li>
            {/* {this.props.LeaderBoard.map((record, i)=> {
              return (<li key={i}>{record}</li>)
            })} */}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default LeaderBoard;