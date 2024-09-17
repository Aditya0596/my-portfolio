// src/components/Hero.jsx
import React from 'react';
import myImage from '../assets/Aditya.jpeg'; // Import the image

const Hero = () => {
  return (
    <div className="jumbotron text-center">
      <br ></br>
      <br ></br>
      <img 
        src={myImage} 
        alt="My Portrait" 
        style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
      />
      <h1 className="display-4 mt-3">Hello, I'm Aditya Pramod Dayma</h1>
      <p className="lead">I'm a web developer with expertise in React.js, Bootstrap, and more.</p>
      
    </div>
    
    
  );
};

export default Hero;
