import React from 'react'

class QuestionAnswer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			questionString: '' + this.props.questionString[1] + this.props.questionString[0] + this.props.questionString[2], 
			answers: this.props.answers, 
			correctAnswer: this.props.correctAnswer,
			questionsLeft: this.props.questionsLeft,
			timeElapsed: this.props.timeElapsed
		}
		this.findCorrect = this.findCorrect.bind(this)
	}

	componentDidMount(){
		this.props.inProgressBoolUpdate()
	}


	findCorrect(answer, question){
		if (this.state.questionsLeft === 1){
			this.props.inProgressBoolUpdate()
		} else {
			this.props.newQuestion()
		}

		if (answer === this.state.correctAnswer){
			this.props.correctArrayUpdate(question)
			this.props.numberCorrectUpdate()
			this.props.questionsLeftUpdate()
		} else {
			this.props.incorrectArrayUpdate(question)
			this.props.numberIncorrectUpdate()
			this.props.questionsLeftUpdate()
		}


	}



	render(){
		return(
			<div>
				<div>{this.state.questionString}</div>
				<div>{this.state.answers.map((answer, id) => <Answer question={this.state.questionString} 
																														answer={answer} 
																														key={id} 
																														findCorrect={this.findCorrect} />)}</div>
				<Timer time={this.props.timeElapsed} />
				<div>Questions Left: {this.props.questionsLeft}</div>
			</div>
		)
	}
}

export default QuestionAnswer


const Answer = (props) => (
	<button onClick={() => props.findCorrect(props.answer, props.question)}>{props.answer}</button>
)


const Timer = (props) => (
	<span>Time Elapsed: {props.time}</span>
)

