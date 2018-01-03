import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.jsx'
import NavSideBar from './components/navsidebar.jsx'
import InfoSideBar from './components/infosidebar.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemType = '+',
      timeElapsed = 0,
      numberCorrect = 0,
      questionsLeft = 0,
      incorrectArray = [],
      correctArray = [],
      finalTime = 0,
      inProgressBool = false
    }
  }
  render() {
    return (
      <h1>
        QuikMaths
      </h1>
      <div>
        <NavSideBar 
          problemType = {this.state.problemType}
          inProgressBool = {this.state.inProgressBool}
        />
        <Game
          problemType = {this.state.problemType}
          timeElapsed = {this.state.timeElapsed}
          numberCorrect = {this.state.numberCorrect}
          questionsLeft = {this.state.questionsLeft}
          incorrectArray = {this.state.incorrectArray}
          correctArray = {this.state.correctArray}
          finalTime = {this.state.finalTime}
          inProgressBool = {this.state.inProgressBool}
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