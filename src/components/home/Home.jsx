import React from 'react'
import './Home.css'
import logo from '../../assts/img/whats_brocamp.jpeg';
// import Features from '../Features/Features';

function Home() {
  const button = {
     id:1,
     des:"Apply Now"
  }
  return (
    <div className='loop'>
      <div className='home-section'>
      <div className="home">
      <img className='home' src={logo} alt=""/>
      </div>
      <div className='home-sec'> 
         <h1>No Tuition Fee <br /> Upfront, <br />
           Pay Only When <br /> You Earn.</h1>
         <p>From Zero to a high paid Software Engineer in 7 <br /> months.</p>
      <div className='home-pop'>
        {
          button.des === "Apply Now"?
          <button className='home-btn'>{button.des}</button>
          :null
        }
      </div>
      <p>(NB: Read all the <span className='mod'>FAQs</span> carefully before you <br />
          submit the application)</p>
     

      </div>
      
      </div>
      
    </div>
  )
}

export default Home
