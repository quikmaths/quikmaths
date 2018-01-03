import React from 'react'
import QuestionAnswer from './QuestionAnswer.jsx'
import questionGen from '../../../problemGen.js'

const problemType = {
  '+': 'Addition',
  '-': 'Subtraction',
  '*': 'Multiplication',
  '/': 'Division'
}

class Game extends React.Component {
  constructor(props) {
    super(props) {
      this.state = {
        questionString: '',
        answers: [],
        correctAnswer: undefined
      }
    }

    this.newQuestion = this.newQuestion.bind(this);
  }

  newQuestion() {
    let infoObject = questionGen(this.props.problemType, 1, 3);
    
    this.setState({
      questionString: infoObject.question,
      answers: infoObject.choices,
      correctAnswer: correctAnswer
    })
  }

  render() {
    return (
      <div>
        <h1>{problemType[this.props.problemType]}</h1>
        <QuestionAnswer 
          questionString={this.state.questionString}
          answers={this.state.answers}
          correctAnswer={this.state.correctAnswer}
          newQuestion={this.newQuestion}
          />
        <Statistics />
      </div>
    )
  }
}

export default Game;
