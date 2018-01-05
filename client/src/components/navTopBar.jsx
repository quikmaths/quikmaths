import React from 'react';
import UserInfo from './userInfo.jsx';
import LeaderBoard from './leaderBoard.jsx';
import InfoSideBar from './infoSideBar.jsx';

class NavTopBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'user'
    }
    this.selectStyle = {
      'cursor' : 'pointer'
    }
  }

  selectedTabUpdate(selection) {
    this.setState({
      selectedTab: selection
    })
  }

  render(){
    return (
      <div>
        <h1>
          QUIKMATHS
        </h1>
        <ul>
          <li>
            <button onClick={() => {
              this.props.getUserInfo()
              this.selectedTabUpdate('user')
            }}>User</button>
          </li>
          <li>
            <button onClick={() => {
              this.props.getLeaderBoard()
              this.selectedTabUpdate('leaderboard')
            }}>LeaderBoard</button>
          </li>
          <li>
            <button onClick={() => {
              this.selectedTabUpdate('tutorial')
            }}>Tutorial</button>
          </li>
        </ul>
        <UserInfo
          selectedTab={this.state.selectedTab}
          username={this.props.username}
          createdAt={this.props.createdAt}
          gamesPlayed={this.props.gamesPlayed}
          totalCorrect={this.props.totalCorrect}
          totalIncorrect={this.props.totalIncorrect}
          highScore={this.props.highScore}
          bestTime={this.props.bestTime}
          totalUserCorrect={this.props.totalUserCorrect}
          totalUserIncorrect={this.props.totalUserIncorrect}
        />
        <LeaderBoard
          selectedTab={this.state.selectedTab}
          recordsList={this.props.recordsList}
        />
        <InfoSideBar
          selectedTab={this.state.selectedTab}
        />
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }

}

export default NavTopBar;