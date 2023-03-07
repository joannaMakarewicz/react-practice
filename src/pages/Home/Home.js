import React from 'react';
import Invitation from '../../components/Invitation';
import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects/Projects';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home pb-4'>
      <div >
      <Navbar/>
      <Invitation/>
      <Projects/>
      </div>

    </div>

  )
}

export default Home;
