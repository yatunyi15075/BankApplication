import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../assets/auth.png';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('borrower'); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      //when deploying I changed the backedn path based on the backend path from where our backedn runs online
      const response = await axios.post('https://bankapplication-hsep.onrender.com/api/users/register', {
        name,
        email,
        password,
        role,
      });

      if (response.data.token) {
        toast.success('Registration successful!', { position: toast.POSITION.TOP_RIGHT });
        if (role === 'admin') navigate('/admin/dashboard');
        else if (role === 'lender') navigate('/lender/dashboard');
        else navigate('/borrower/dashboard');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 w-full bg-gray-100">
        <img src={auth} alt="Register" className="object-cover w-full h-full" />
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center px-8 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <option value="borrower">Borrower</option>
              <option value="lender">Lender</option>
            </select>
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signin" className="text-indigo-600 hover:underline">Already have an account? Login</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
