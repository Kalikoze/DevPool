import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import Welcome from '../Welcome/Welcome';

export default class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <Welcome />
        <Tabs />
      </section>
    )
  }
}
