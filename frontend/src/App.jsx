import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard';
import Sidebar from './components/Sidebar';
import Home from './pages/LandingPage/Home';
import Register from './auth/Register';
import SignIn from './auth/SignIn';
import AdminDashboard from './pages/admin/AdminDashboard';

const App = () => {
  // Simulate user role; this should come from authentication context or state
  const [userRole, setUserRole] = useState('admin'); // Change to 'borrower' or 'lender' as needed

  return (
    <Router>
      <div className="flex">
        {/* Conditionally render Sidebar based on the current route */}
        <SidebarWrapper userRole={userRole} />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Component to conditionally render Sidebar
const SidebarWrapper = ({ userRole }) => {
  const location = useLocation();

  // List of paths where the sidebar should not be visible
  const hideSidebarPaths = ['/', '/register', '/signin'];
  

  return (
    <>
      {!hideSidebarPaths.includes(location.pathname) && (
        <Sidebar userRole={userRole} />
      )}
    </>
  );
};

export default App;
