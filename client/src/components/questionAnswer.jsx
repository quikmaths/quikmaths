import React from 'react'

class QuestionAnswer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			questionString: this.props.questionString, 
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
		if (answer === this.state.correctAnswer){
			this.props.correctArrayUpdate(question)
			this.props.numberCorrectUpdate()
			this.props.questionsLeftUpdate()
		} else {
			this.props.incorrectArrayUpdate(question)
			this.props.numberIncorrectUpdate()
			this.props.questionsLeftUpdate()
		}

		if (this.state.questionsLeft === 0){
			this.props.inProgressBoolUpdate()
		}

		this.props.newQuestion()
	}



	render(){
		return(
			<div>
				<span>{this.state.question}</span>
				<li>{this.state.answers.map((answer, id) => <Answer question={this.state.questionString} 
																														answer={answer} 
																														key={id} 
																														findCorrect={this.props.findCorrect} />)}</li>
				<Timer time={this.props.timeElapsed} />
				<span>Questions Left: {this.questionsLeft}</span>
			</div>
		)
	}
}

export {QuestionAnswer}


const Answer = (props) => (
	<button onClick={() => props.findCorrect(props.answer, props.question)}></button>
)

export {Answer}

const Timer = (props) => (
	<span>Time Elapsed: {props.time}</span>
)

export {Timer}
