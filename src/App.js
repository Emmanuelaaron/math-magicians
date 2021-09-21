import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/Quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
