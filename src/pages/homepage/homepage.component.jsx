import React from 'react';
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss';

const HomePage = (props) => {
  // console.log('homepage props', props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage;