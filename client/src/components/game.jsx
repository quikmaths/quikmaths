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
      this.state = {
        questionString: '' + questionString[1] + questionString[0] + questionString[2],
        answers: [],
        correctAnswer: undefined,
        questionsLeft: this.props.questionsLeft
      }

    this.newQuestion = this.newQuestion.bind(this);
  }

  componentWillMount(){
    this.newQuestion()
  }

  newQuestion() {
    let infoObject = questionGen(this.props.problemType, 3, 1);
    
    this.setState({
      questionString: infoObject.question,
      answers: infoObject.choices,
      correctAnswer: infoObject.correctAnswer
    })
  }


  render() {
    if (this.state.questionsLeft === 0) {
      return (
        <Statistics 
          numberCorrect={this.props.numberCorrect}
          incorrectArray={this.props.incorrectArray}
          correctArray={this.props.correctArray}
          finalTime={this.props.finalTime}
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
          />
        </div>
      )
    }
  }
}

export default Game;
