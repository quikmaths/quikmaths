import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World PLEASE RENDERRRRRR</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

export default App;