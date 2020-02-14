import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmers Market</h1>
      <Link to="/">Home</Link> | <Link to="/NewKeg">Create Market Schedule</Link>
    </div>
  );
}

export default Header;
