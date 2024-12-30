import React from 'react';
import '../styles/Home.css';
import HeaderHome from '../components/headerHome';
import AreaMainHome from '../components/areaMainHome';

function Home() {
  return (
    <div className='container2'>
      <HeaderHome />
      <AreaMainHome />
    </div>
  );
}

export default Home;