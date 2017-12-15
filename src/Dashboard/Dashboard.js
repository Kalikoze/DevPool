import React, { Component } from 'react';
import Tabs from '../Tabs/Tabs';
import Display from '../Display/Display';

export default class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <section className='welcome'>
          <h2>Welcome Back Travis!</h2>
          <p>Here's What's New...</p>
        </section>
        <section className='notifications'>
          <p>| You Currently Have 6 Notifications | </p>
        </section>
        <Tabs />
        <Display />
      </section>
    )
  }
}
