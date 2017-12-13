import React from 'react';
import Button from '../Button/Button';
import '../styles/scss/Section.scss';

const Section = ({ text, category, sectionHeader, sectionDescription }) => {
  return (
    <section className={`category-section ${ category || '' }`}>
      <article>
        <h2 className='section-header'>{ sectionHeader }</h2>
        <p className='section-desc'>{ sectionDescription }</p>
        <Button text={ 'Learn More...' } btnStyle={ 'section-btn' } />
      </article>
      <div className='section-image'>
      </div>
    </section>
  )

}

export default Section;
