import React from 'react';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App d-flex justify-content-center pt-5">
        <Calculator />
      </div>
    );
  }
}

export default App;
