import React from 'react';
import '../styles/Hub.css';
import HeaderHub from '../components/headerHub';
import AreaTypes from '../components/areaTypes';

function Hub() {
  return (
    <div className='container'>
      <HeaderHub />
      <AreaTypes />
    </div>
  );
}

export default Hub;