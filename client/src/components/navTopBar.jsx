import React from 'react';

class NavTopBar extends React.Component {
  constructor(props){
    super(props)
    this.style = {
      'display' : 'flex',
      'flexDirection': 'column',
      'fontFamily' : 'Poppins'
    }
    this.selectStyle = {
      'cursor' : 'pointer'
    }
  }

  render(){
    return (
      <div>Navbar Top
        <ul>
          <li>
            <button>User</button>
          </li>
          <li>
            <button>Leaderboards</button>
          </li>
        </ul>
      </div>
    )
  }

}

export default NavTopBar;