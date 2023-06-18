import React, { useState } from 'react';

import { connection } from './server/app.js';
import RegistrationForm from './Components/RegistrationForm.jsx';
import Navbar from './Components/Navbar.jsx';
import ProductsList from './Components/ProductList.jsx';
import './App.css';



const App = () => {
  // State variable to control visibility of the form
  const [showForm, setShowForm] = useState(true);

  // Function to handle form submission
  const handleRegister = (event) => {
    event.preventDefault();
    // Include your logic to handle the registration here
    // Once the registration is successful, hide the form
    setShowForm(false);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Include your logic to handle the login here
    // Once the login is successful, hide the form
    setShowForm(false);
  };

  return (
    <div className='App'>
      <Navbar/>
      {showForm ? <RegistrationForm onRegister={handleRegister} onLogin={handleLogin} /> : <ProductsList/>}
    </div>
  );
};


export default App;
