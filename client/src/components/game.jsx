import React from 'react'
import QuestionAnswer from './questionAnswer.jsx'
import Statistics from './statistics.jsx'
import questionGen from '../../../problemGen.js'

const problemType = {
  '+': 'Addition',
  '-': 'Subtraction',
  '*': 'Multiplication',
  '/': 'Division'
}

class Game extends React.Component {
  constructor(props) {
    super(props) 
    // finaltime is state in game component instead of prop
      this.state = {
        finalTime: 0,
        questionString: [],
        answers: [],
        correctAnswer: undefined,
      }
    this.newQuestion = this.newQuestion.bind(this);
    this.finalTimeUpdate = this.finalTimeUpdate.bind(this);
  }

  componentWillMount(){
    this.newQuestion()
  }

  newQuestion() {
    let infoObject = questionGen(this.props.problemType, 3, 1);
    this.setState({
      questionString: `${infoObject.question[1]} ${infoObject.question[0]} ${infoObject.question[2]}`,
      answers: infoObject.choices,
      correctAnswer: infoObject.correctAnswer
    })
  }

  finalTimeUpdate() {
    this.setState({
      finalTime: this.props.timeElapsed
    })
  }

  render() {
    if (this.props.questionsLeft === 0) {
      return (
        <Statistics 
          numberCorrect={this.props.numberCorrect}
          incorrectArray={this.props.incorrectArray}
          correctArray={this.props.correctArray}
          finalTime={this.state.finalTime}
        />
      )
    } else {
      return (
        <div>
          <h1>{problemType[this.props.problemType]}</h1>
          <QuestionAnswer 
            questionString={this.state.questionString}
            answers={this.state.answers}
            correctAnswer={this.state.correctAnswer}
            newQuestion={this.newQuestion}
            numberCorrectUpdate={this.props.numberCorrectUpdate}
            questionsLeftUpdate={this.props.questionsLeftUpdate}
            incorrectArrayUpdate={this.props.incorrectArrayUpdate}
            correctArrayUpdate={this.props.correctArrayUpdate}
            inProgressBoolUpdate={this.props.inProgressBoolUpdate}
            timeElapsed={this.props.timeElapsed}
            questionsLeft={this.props.questionsLeft}
            numberIncorrectUpdate={this.props.numberIncorrectUpdate}
            finalTimeUpdate={this.finalTimeUpdate}
          />
        </div>
      )
    }
  }
}

export default Game;