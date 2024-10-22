import React from 'react';
import '../assets/styles.css'; 
import { FaHome } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="container">
      <h1><FaHome className="icon" />Welcome to the Shopping List App</h1>
      <p>Organize your shopping needs efficiently!</p>
    </div>
  );
};

export default HomePage;
