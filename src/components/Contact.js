import React from 'react';
import PropTypes from 'prop-types';
import '../style/Contact.css';

function Contact(prop) {
  return (
    <div className="Contact">
        <img  className="avatar" src={prop.avatar} alt={prop.name}/>
        <div>
            <p className="name">{prop.name}</p>
            <div className="status">
                <span className={prop.online ? 'status-online' : 'status-offline'}/>
                <p className="status-text">{prop.online ? 'online' : 'offline'}</p>
            </div>
        </div>
       
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
export default Contact;