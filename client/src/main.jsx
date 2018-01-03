import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx'
import NavSideBar from './components/navsidebar.jsx'
import InfoSideBar from './components/infosidebar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemType: '+',
      timeElapsed: 0,
      numberCorrect: 0,
      numberIncorrect: 0,
      questionsLeft: 0,
      finalTime: 0,
      inProgressBool: false
    }
  }

  problemTypeUpdate(operator) {
    this.setState({
      problemType: operator
    })
  }

  inProgressBoolUpdate() {
    this.setState({
      inProgressBool: !this.state.inProgressBool
    })
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

  questionsLeftUpdate() {
    this.setState({
      questionsLeft: this.state.questionsLeft - 1
    })
  }
  
  finalTimeUpdate() {
    this.setState({
      finalTime: this.state.timeElapsed
    })
  }

  render() {
    return (
      <div>
        <h1>
          QuikMaths
        </h1>
        <NavSideBar 
          problemType = {this.state.problemType}
          inProgressBool = {this.state.inProgressBool}
          inProgressBoolUpdate = {this.inProgressBoolUpdate.bind(this)}
          problemTypeUpdate = {this.problemTypeUpdate.bind(this)}
        />
        <Game
          problemType = {this.state.problemType}
          timeElapsed = {this.state.timeElapsed}
          numberCorrect = {this.state.numberCorrect}
          numberIncorrect = {this.state.numberIncorrect}
          questionsLeft = {this.state.questionsLeft}
          incorrectArray = {this.state.incorrectArray}
          correctArray = {this.state.correctArray}
          finalTime = {this.state.finalTime}
          inProgressBool = {this.state.inProgressBool}
          numberCorrectUpdate = {this.numberCorrectUpdate.bind(this)}
          numberIncorrectUpdate = {this.numberIncorrectUpdate.bind(this)}
          questionsLeftUpdate = {this.questionsLeftUpdate.bind(this)}
          finalTimeUpdate = {this.finalTimeUpdate.bind(this)}
          inProgressBoolUpdate = {this.inProgressBoolUpdate.bind(this)}
        />
        <InfoSideBar
          problemType = {this.state.problemType}
          inProgressBool = {this.state.inProgressBool}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

export default App;