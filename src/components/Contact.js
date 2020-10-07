import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img  className="avatar" src="https://randomuser.me/api/portraits/women/59.jpg"/>
        <div>
            <p className="name">Maureen Ruiz</p>
            <div className="status">
                <span className="status-online"/>
                <p className="status-text">online</p>
            </div>
        </div>
       
    </div>
  );
}

export default Contact;