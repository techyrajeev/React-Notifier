import React from 'react';
import { NavLink } from 'react-router-dom'

class Splash extends React.Component {
  render(){
    return (
      <div className="test">
        <NavLink to="/home"  className="test">
          {"logo"}
        </NavLink>
      </div>
    );
  }
}

export default Splash;
