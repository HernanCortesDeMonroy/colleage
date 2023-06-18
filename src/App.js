import React, { useState } from 'react';

import RegistrationForm from './Components/RegistrationForm.jsx';
import Navbar from './Components/Navbar.jsx';
import ProductsList from './Components/ProductList.jsx';
import './App.css';

import { getUsers, addUser } from './server/app.js';


const App = () => {
  const [showForm, setShowForm] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to handle form submission
  const handleRegister = (username, email, password) => {
    addUser(username, email, password);
    setShowForm(false);
  };

  const handleToggleForm = () => {
    setShowForm(true);
  };

  const handleLogin = (username, email, password) => {
    const users = getUsers();
    let elegible = false;
    let admin = false;
    users.forEach(user => {
      if (user.nickname === username &&
        user.gmail === email &&
        user.password === password)
        elegible = true;
    })
    if ("admin" === username &&
      "admin" === email &&
      "admin" === password)
      admin = true;

    if (admin) setIsAdmin(true)
    if (elegible) setShowForm(false);
  };

  return (
    <div className='App'>
      <Navbar onToggleForm={handleToggleForm} showForm={showForm} />
      {showForm ? <RegistrationForm onRegister={handleRegister} onLogin={handleLogin} /> : <ProductsList />}
    </div>
  );
};


export default App;
