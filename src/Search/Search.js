import React, { Component } from 'react';
import happyWorkers from './assets/developers-working-together.jpg';
import Button from '../Button/Button';

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
          <section className="overlay">
            <article className="search-input">
              <p className="search-text">
                Find your next developer job in seconds...
              </p>
              <input
                type="text"
                value={ search }
                placeholder="Specify the dev job you're looking for"
                onChange={e => this.setState({ search: e.target.value })}
              />
              <p className='advanced'>
                Advanced Search...
              </p>
            </article>
            <Button btnStyle={ 'button' } text={'Search'} />
          </section>
      </section>
    )
  }
}
