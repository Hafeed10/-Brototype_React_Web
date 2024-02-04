import React from 'react';
import './middle.css';


function Middle() {
  const hop = [
    {
      _id: 40,
      h3: 'Web Development',
      h4: 'in Python / Node / PHP / Next.js',
    },
    {
      _id: 41,
      h3: 'BlockChain',
    },
    {
      _id: 42,
      h3: 'Cyber Security',
    },
    {
      _id: 43,
      h3: 'Machine Learning',
    },
  ];
  const mobil = [
    {
      _id: 44,
      h3: 'Mobile Development',
      h4: 'In Kotlin Android/iOS / React Native',
    },
    {
      _id: 48,
      h3: 'Articles Intelligence',
    },
    {
      _id: 45,
      h3: 'Data Science',
    },
    {
      _id: 46,
      h3: 'Augemnted Applications',
    },
  ]

  return (
    <div className='section-sem'>
      <h1>What Domains You Can Choose</h1>
      <div className='wrapper'>
        <div className='section-sem2'>
          {hop.map(item => (
            <div key={item._id} className='ul'>
              <h3>{item.h3}</h3>
              <h4>{item.h4}</h4>
            </div>
          ))}
        </div>

        <div className='section-sem3'>
          {mobil.map(item => (
            <div key={item._id} className='ul'>
              <h3>{item.h3}</h3>
              <h4>{item.h4}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Middle;
