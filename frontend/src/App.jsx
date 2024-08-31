import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/users/Dashboard.jsx';
import Home from './components/LandingPage/Home.jsx';
import Register from './components/auth/Register.jsx';
import SignIn from './components/auth/SignIn.jsx';
import AdminDashboard from './components/admin/AdminDashboard.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
