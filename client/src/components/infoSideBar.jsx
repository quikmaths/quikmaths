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
    this.state = {
      setting: ''
    }
  }









render() {
  if (this.props.selectedTab === 'tutorial') {

    return(
        <div>
        <h4>
          Tutorial
        </h4>
        </div>
      )
  } else {
    return null
  }
  }
}

export default InfoSideBar;