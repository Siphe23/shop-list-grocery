import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { registerUser } from '../reducers/authReducer';
import { FaUserPlus, FaEnvelope, FaLock } from 'react-icons/fa';
import '../assets/styles.css'; 

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/users', formData);
      dispatch(registerUser(formData));
      // Optionally redirect after registration
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <div className="container">
      <h2><FaUserPlus className="icon" />Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <a href="/login" className="link">Already have an account? Login here.</a>
    </div>
  );
};

export default RegisterPage;


