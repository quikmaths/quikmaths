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
          {/* <ul>
            {this.props.recordsList.map((record, i)=> {
              return (<li key={i}>User:{record.username} Score:{record.score} Time: {record.time} Accuracy: {record.numberCorrect / (record.numberCorrect + record.numberIncorrect) * 100 + ' %'}</li>)
            })}
          </ul> */}
          <Table data={this.props.recordsList} />
        </div>
      )
    } else {
      return null;
    }
  }
}

const Table = ({data}) => (
  <table>
    <tbody>
      <tr>
        <td>User</td>
        <td>Score</td>
        <td>Time</td>
        <td>Accuracy</td>
      </tr>
      {data.map((row, key) => {
        return (<TableRow row={row} key={key} />)
      })}
    </tbody>
  </table>
)

const TableRow = ({row}) => (
  <tr>
    <td key={row.username}>{row.username}</td>
    <td key={row.score}>{row.score}</td>
    <td key={row.time}>{row.time}</td>
    <td key={row.numberCorrect}>{row.numberCorrect / (row.numberCorrect + row.numberIncorrect) * 100 + ' %'}</td>
  </tr>
)

export default LeaderBoard;