import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => {
          return (
            <div>
              <Header />
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
