import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrendingCoinsGraphs from '../components/TrendingCoinsGraphs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
      <div className='graphsContainer'>
      <TrendingCoinsGraphs />
      </div>
    </div>
  )
}

export default Home