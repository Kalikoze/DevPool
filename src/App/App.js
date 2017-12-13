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
              <Search/>
              <Section
                sectionHeader='Customize Your Workflow'
                sectionDescription='Prioritize the jobs you value the most and keep track of what status they are in.  Stay in touch with people and keep track of your notifications in a messaging system that is clean and manageable, separate from your everyday emails.  Keep your calendar up to date or sync it with your google account so that you can always know what will be next.  Set reminders for special events and you will receive a test message that day so you never forget again!  You can even specify what types of jobs you are interested in and receive email notifications as soon as those jobs are posted.  Dont miss another opportunity.  All of this can be accessed on your own dashboard.  Stay organized with the look and feel that makes you the most productive & efficient.'
              />
              <Section
                sectionHeader='Find Jobs Right Now!'
                category='reverse'
                sectionDescription={`It's important to give our users options and most important, find you jobs!  We realize it's tough to find a job that you can be excited about.  We equally recognize that companies know what they want when searching for new employees. By entering your requirements into the search bar and adding more specifications into the advanced search options, you lead the path to the positions that fit you the most.  Want to work remote?  Wish the position was focused more in Ruby or Javascript?  It's just a couple clicks away.  Sign up for an account and you can save those parameters so that you can get quicker and more accurate results to your dream job.  Quit searching for jobs and start finding jobs!`}
              />
              <Section
                sectionHeader='Reach Out & Network!'
                category='last'
                sectionDescription={`Another powerful tool DevPool offers is the ability to network.  Get recommendations on which people you should contact when you are interested in a position.  Sync your GitHub, LinkedIn, & Twitter accounts so you can keep track of your messages all in one place.  If that's not enough, we also can make recommendations on meetups and conferences that your friends are attending as well, so you can be at the right places with the right people.  The developer world is based on teamwork and communication.  At DevPool, you can have access to all of this all in one place.  What are you waiting for?`}
              />
              <Section
                sectionHeader='Jump Into The DevPool Now!'
                category='footer'
                sectionDescription={`We've been there and we know the job search can be a struggle especially if this is your first job.  Why not make your life a little easier and join the hundreds that are already a part of this community?  Be apart of the team and join the search.  Interested in hiring as well?  We've got plans to add that to the dashboard soon. Follow our updates here and sign up for our newsletter so you can stay up to date with the latest features.`}
              />
            </div>
          )
        }} />
      </div>
    );
  }
}

export default App;
