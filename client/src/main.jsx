import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Game from './components/game.jsx';
import NavTopBar from './components/navTopBar.jsx';
import NavSideBar from './components/navSideBar.jsx';
import InfoSideBar from './components/infoSideBar.jsx';
import LeaderBoard from './components/leaderBoard.jsx';
import UserInfo from './components/userInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemType: '+',
      timeElapsed: 0,
      numberCorrect: 0,
      numberIncorrect: 0,
      questionsLeft: 0,
      inProgressBool: false,
      correctArray: [],
      incorrectArray: []
    }
    this.AppStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
      fontFamily: 'Poppins',
      padding: '10px'
    }
    this.NavSideBarStyle = {
      gridColumn: '1',
      gridRow: '2/5'
    }
    this.InfoSideBarStyle = {
      gridColumn: '5',
      gridRow: '2/5',
      fontFamily: 'Poppins',
      backgroundColor: 'gray'
    }
    this.GameStyle = {
      gridColumn: '2/4',
      gridRow: '2/5'
    }
  }

  startTimer() {
    // timer adds seconds to timeElapsed as long as game is in progress
    setTimeout(() => {
      if (this.state.inProgressBool) {
        this.setState({
          timeElapsed: this.state.timeElapsed + 1
        })
        this.startTimer()
      }
    }, 1000)
  }

  problemTypeUpdate(operator) {
    // navsidebar passes in operator onclick
    this.setState({
      problemType: operator
    })
  }

  inProgressBoolUpdate() {
    // use to start and stop games
    this.setState({
      inProgressBool: !this.state.inProgressBool,
    }, ()=> {
      if (this.state.inProgressBool) {
        this.startTimer()
      } else {
        this.saveRecord()
        this.setState({
          timeElapsed: 0
        })
      }
    })
  }

  saveRecord() {

  }

  numberCorrectUpdate() {
    this.setState({
      numberCorrect: this.state.numberCorrect + 1
    })
  }

  numberIncorrectUpdate() {
    this.setState({
      numberIncorrect: this.state.numberIncorrect + 1
    })
  }

  resetCounts() {
    this.setState({
      numberIncorrect: 0,
      numberCorrect: 0
    })
  }

  questionsLeftUpdate() {
    this.setState({
      questionsLeft: this.state.questionsLeft - 1
    })
  }

  setNumberOfQuestions(numQuestions = 10) {
    // numQuestions can be passed in from navsidebar or defaults to 10
    this.setState({
      questionLeft: numQuestions
    })
  }

  correctArrayUpdate(question) {
    this.state.correctArray.push(question);
  }

  incorrectArrayUpdate(question) {
    this.state.incorrectArray.push(question);
  }

  startNewGame(operator) {
    this.setState({
      questionsLeft: 10, 
      problemType: operator
    })
    this.resetCounts()
    this.inProgressBoolUpdate()
  }

  render() {
    return (
      <div style={this.AppStyle}>
        <NavTopBar/>
        <UserInfo/>
        <LeaderBoard/>
        <NavSideBar
          style={this.NavSideBarStyle}
          inProgressBool = {this.state.inProgressBool}
          startNewGame= {this.startNewGame.bind(this)}
          inProgressBoolUpdate = {this.inProgressBoolUpdate.bind(this)}
          problemTypeUpdate = {this.problemTypeUpdate.bind(this)}
          questionsLeftUpdate = {this.questionsLeftUpdate.bind(this)}
        />
        <Game
          style={this.GameStyle}
          problemType = {this.state.problemType}
          timeElapsed = {this.state.timeElapsed}
          numberCorrect = {this.state.numberCorrect}
          numberIncorrect = {this.state.numberIncorrect}
          questionsLeft = {this.state.questionsLeft}
          inProgressBool = {this.state.inProgressBool}
          correctArray = {this.state.correctArray}
          incorrectArray = {this.state.incorrectArray}
          numberCorrectUpdate = {this.numberCorrectUpdate.bind(this)}
          numberIncorrectUpdate = {this.numberIncorrectUpdate.bind(this)}
          resetCounts = {this.resetCounts.bind(this)}
          questionsLeftUpdate = {this.questionsLeftUpdate.bind(this)}
          inProgressBoolUpdate = {this.inProgressBoolUpdate.bind(this)}
          correctArrayUpdate = {this.correctArrayUpdate.bind(this)}
          incorrectArrayUpdate = {this.incorrectArrayUpdate.bind(this)}
        />
        <InfoSideBar
          style={this.InfoSideBarStyle}
          problemType = {this.state.problemType}
          inProgressBool = {this.state.inProgressBool}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

export default App;
