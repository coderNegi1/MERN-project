import React from 'react';
import logo from '../../images/logo.png'; 

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Display the logo image */}
      <img src={logo} alt="Logo" className=" h-20" /> 
    </div>
  );
};

export default Logo;
