import React from 'react'

class QuestionAnswer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			questionString: this.props.questionString, 
			answers: this.props.answers, 
			correctAnswer: this.props.correctAnswer
		}
		this.findCorrect = this.findCorrect.bind(this)
	}

	findCorrect(answer){
		var correct = false
		if (answer === this.state.correctAnswer){
			correct = true
		}

		this.props.newQuestion
	}

	render(){
		return(
			<div>
				<span>{this.state.question}</span>
				<li>{this.props.answers.map((answer, id) => <Answer answer={answer} key={id} findCorrect={this.props.findCorrect} />)}</li>
			</div>
		)
	}
}

export default QuestionAnswer


const Answer = (props) => (
	<button onClick={() => props.findCorrect(props.answer)}></button>
)

export default Answer 
