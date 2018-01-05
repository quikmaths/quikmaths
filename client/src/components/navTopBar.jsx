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
    this.listStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      listStyleType: 'none',
      marginLeft: '-40px',
      marginTop: '-20px',
      marginBottom: '40px'
    }
    this.listItemStyle = {
      border: '1px solid black',
      textAlign: 'center',
      cursor : 'pointer'
    }
    this.titleStyle = {
      marginTop: '-10px'
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
        <h1 style={this.titleStyle}>
          QUIKMATHS
        </h1>
        <ul style={this.listStyle}>
          <li 
          style={this.listItemStyle}
          onClick={() => {
            this.props.getUserInfo()
            this.selectedTabUpdate('user')
          }}>
            User
          </li>
          <li 
          style={this.listItemStyle}
          onClick={() => {
            this.props.getLeaderBoard()
            this.selectedTabUpdate('leaderboard')
          }}>
            LeaderBoard
          </li>
          <li 
          style={this.listItemStyle}
          onClick={() => {
            this.selectedTabUpdate('tutorial')
          }}>
            Tutorial
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