import React from 'react';
import Tab from '../Tab/Tab';

const Tabs = () => {
  return (
    <section className='tabs'>
      <Tab text="Overview"/>
      <Tab text="Job Activity"/>
      <Tab text="Messages"/>
      <Tab text="Calendar"/>
      <Tab text="Account Settings"/>
    </section>
  )
}

export default Tabs;
