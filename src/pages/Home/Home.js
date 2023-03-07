import React from 'react';
import Invitation from '../../components/Invitation';
import Navbar from '../../components/Navbar';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home pb-4'>
      <div >
      <Navbar/>
      <Invitation/>
      </div>

    </div>

  )
}

export default Home;
