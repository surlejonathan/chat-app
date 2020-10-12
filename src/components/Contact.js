import React from 'react';
import PropTypes from 'prop-types';
import '../style/Contact.css';

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      online: this.props.online
    }
  }

  render () {
    return (
      <div className="Contact">
          <img  className="avatar" src={this.props.avatar} alt={this.props.name}/>
          <div>
              <p className="name">{this.props.name}</p>
              <div className="status">
                  <span
                  onClick ={
                    (e) => {
                    const offline = !this.state.online;
                    this.setState({online : offline})
                    }
                  } 
                  className={this.state.online ? 'status-online' : 'status-offline'}/>
                  <p className="status-text">{this.state.online ? 'online' : 'offline'}</p>
              </div>
          </div>
         
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
