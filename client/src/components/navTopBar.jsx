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
    this.style = {
      'display' : 'flex',
      'flexDirection': 'column',
      'fontFamily' : 'Poppins'
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
        <h4>
          NavbarTop
        </h4>
        <ul>
          <li>
            <button onClick={()=> {
              this.props.getUserInfo()
              this.selectedTabUpdate('user')
            }}>User</button>
          </li>
          <li>
            <button onClick={()=> {
              this.props.getLeaderBoard()
              this.selectedTabUpdate('leaderboard')
            }}>LeaderBoard</button>
          </li>
          <li>
            <button onClick={()=> {
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
          totalIncorrect={this.props.totaIncorrect}
          highScore={this.props.highScore}
          bestTime={this.props.bestTime}
          username={this.props.username}
          recordsList={this.props.recordsList}
        />
        <LeaderBoard
          selectedTab={this.state.selectedTab}
          username={this.props.username}
          createdAt={this.props.createdAt}
          gamesPlayed={this.props.gamesPlayed}
          totalCorrect={this.props.totalCorrect}
          totalIncorrect={this.props.totaIncorrect}
          highScore={this.props.highScore}
          bestTime={this.props.bestTime}
          username={this.props.username}
          recordsList={this.props.recordsList}
        />
        <InfoSideBar
          selectedTab={this.state.selectedTab}
        />
      </div>
    )
  }

}

export default NavTopBar;