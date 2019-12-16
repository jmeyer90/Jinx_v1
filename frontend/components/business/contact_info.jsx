import React from 'react';

const ContactInfo = () => {
  const contactInfo =[
    {Email: "MyEmail@mail.com"},
    {LinkedIn: "My LinkedIn Account"},
    {gitHub: "My Github Account"}
  ];

  return(
    <span className="conact-info-container">
      <section className="business-contact-info">
        <ul className="business-contact-items">
          {contactInfo.map((contact, idx )=> (
            <li key={idx} className="contact-detail-container">
              <h2 className="contact-info-category">
                {Object.keys(contact)[0]}
              </h2>
              <p className="contact-info-details">
                {Object.values(contact)[0]}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </span>
  )
}

export default ContactInfo;