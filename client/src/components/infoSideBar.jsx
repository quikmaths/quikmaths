import React, {Component} from 'react';
// import HomeTutorial from './HomeTutorial';
// import LeaderBoard from './LeaderBoard';
// import MultiplicationTutorial from './MultiplicationTutorial';
// import DivisionTutorial from './DivisionTutorial';
// import AdditionTutorial from './AdditionTutorial';
// import SubtractionTutorial from './SubtractionTutorial';

class InfoSideBar extends Component {
  constructor(props) {
    super(props)
    this.style = {
      marginTop: '-20px',
      marginBottom: '20px'
    }
  }
render() {
  if (this.props.selectedTab === 'tutorial' && this.props.toggleTab) {
    return(
        <div style={this.style}>
          Tutorial goes here!
        </div>
      )
  } else {
    return null
  }
  }
}

export default InfoSideBar;