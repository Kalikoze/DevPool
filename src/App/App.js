import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Section from '../Section/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => {
          return (
            <div>
              <Header />
              <Search />
              <Section />
              <Section />
              <Section />
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
