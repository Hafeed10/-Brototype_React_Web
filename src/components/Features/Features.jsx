import React from 'react'
import './Features.css'

function Features() {
  const rows = [
    {
      id:3,
      icon: <ion-icon name="help-buoy-outline"></ion-icon>,
      title:"Win like army",
      pop:"We work as a team because we get paid only when you get paid"
    },
    {
      id:4,
      icon: <ion-icon name="thunderstorm-outline"></ion-icon>,
      title:"Win like army",
      pop:"We work as a team because we get paid only when you get paid"
    },
    {
      id:5,
      icon: <ion-icon name="boat-outline"></ion-icon>,
      title:"Win like army",
      pop:"We work as a team because we get paid only when you get paid"
    },
  ]
  return (
    <div className='features'>
      <h1>Features</h1>
      <div className="ferp-section">
        {
          rows.map((row, index) => {
            return (
              <div className="ferp-row" key={index}>
                <div className="ferp-icon">
                  {row.icon}
                </div>
                <div className="ferp-title">
                  {row.title}
                </div>
                <div className="ferp-pop">
                  {row.pop}
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Features
