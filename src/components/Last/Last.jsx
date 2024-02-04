import React from 'react'
import './last.css'
import lofo from '../../assts/img/lifeatbrocamp.jpg'
import lofo1 from '../../assts/img/whats_brocamp.jpeg'

function Last() {
    const mult = [
        {
          _id: 23,
          hed: "The Ignition",
          des: "Learn all the fundamentals of programming (0-30 days)."
        },
        {
          _id: 24,
          hed: "The Acceleration",
          des: "During this period, you will dive deep into various aspects of your domain (31-90 days)."
        },
        {
          _id: 25,
          hed: "And the Race",
          des: "You will launch as many live projects as possible."
        },
      ];
    
      return (
        <section>
          <div className="textser">
            {mult.map((item, index) => (
              <div key={item._id} className={`milestone milestone-${index + 1}`}>
                <h1>{item.hed}</h1>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
    
          <div className="dote">
            {mult.map((_, index) => (
              <div key={index + 1}>{index + 1}</div>
            ))}
          </div>
          <hr />
    
          <div className='img'>
          <img src={lofo1} alt="" />
            <img src={lofo} alt="" />
          </div>
        </section>
      );
}

export default Last
