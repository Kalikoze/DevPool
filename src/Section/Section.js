import React from 'react';
import Button from '../Button/Button';
import '../styles/scss/Section.scss';

const Section = ({ text, style, category, sectionHeader, sectionDescription, sectionImage }) => {
  return (
    <section className='category-section { category }'>
      <h2 className='section-header'>{ sectionHeader }Header text</h2>
      <p className='section-desc'>{ sectionDescription }Prioritize the jobs you value the most and keep track of what status they are in.  Stay in touch with people and keep track of your notifications in a messaging system that is clean and manageable, separate from your everyday emails.  Keep your calendar up to date or sync it with your google account so that you can always know what will be next.  Set reminders for special events and you will receive a test message that day so you never forget again!  You can even specify what types of jobs you are interested in and receive email notifications as soon as those jobs are posted.  Dont miss another opportunity.  All of this can be accessed on your own dashboard.  Stay organized with the look and feel that makes you the most productive & efficient.</p>
      <div className='section-image'>
        { sectionImage }
      </div>
      <Button text={ 'Learn More...' } btnStyle={ 'section-btn' } />
    </section>
  )

}

export default Section;
