import React, { Component } from 'react';
import happyWorkers from './assets/developers-working-together.jpg';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  render() {
    const { search } = this.state;
    return (
      <section className="l-search">
        <img src={happyWorkers} alt="Picture of people working happily!" />
          <section className="overlay">
            <article className="search-input">
              <p className="search-text">
                Find your next developer job in seconds...
              </p>
              <input
                type="text"
                value={search}
                placeholder="Specify what dev job you're looking for"
                onChange={e => this.setState({ search: e.target.value })}
              />
              <p className='advanced'>
                Advanced Search...
              </p>
            </article>
          </section>
      </section>
    )
  }
}
