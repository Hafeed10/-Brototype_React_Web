import React from 'react';
import './Brocamp.css';
import logo1 from '../../assts/img/whats_brocamp.jpeg';

function Brocamp() {
  const headings = [
    {
      _id: 23,
      title: "Brocamp in Brief?",
      des: [
        "Brocamp helps the young Indian generation who had benefited nothing from our country’s poor education system by providing an intensive industry relevant training on the leading software technologies.",
        "The Brocamp program is completely FREE upfront and our students pay zero tuition fee until they land a job. We believe everyone should get the right opportunities to learn, hence we do not charge any fees upfront.",
        "Brocamp is not just another training institute where you go learn something and leave forever. Brocamp is a community of high performance people who support each other and to win together. Each Brocamp grad will always be in touch with our community and help the new buddies as a way of giving back."
       
      ]
    }
    // Add more heading objects as needed
  ];

  return (
    <div className='brocamp'>
      <div className="brocamp-section">
        <div className="brocamp-left">
          <img src={logo1} alt="" />
        </div>
        <div className="brocamp-right">
          {
            headings.map((heading) => (
              <div className="brocamp-heading" key={heading._id}>
                <h1>{heading.title}</h1>
                {heading.des.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Brocamp;
