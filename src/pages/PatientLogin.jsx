import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      if (formData.email === 'patient@example.com' && formData.password === 'password') {
        localStorage.setItem('isPatientLoggedIn', true);
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Simulate signup
      if (formData.name && formData.email && formData.password) {
        localStorage.setItem('isPatientLoggedIn', true);
        navigate('/');
      } else {
        setError('Please fill all fields');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Login/Signup Form */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full mx-auto">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`flex-1 py-3 text-center font-medium ${
                isLogin 
                  ? 'text-teal-600 border-b-2 border-teal-600' 
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                !isLogin 
                  ? 'text-teal-600 border-b-2 border-teal-600' 
                  : 'text-gray-500 hover:text-teal-600'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Why Join MediBook?</h2>
            <p className="mt-2 text-gray-600">Join our platform for better healthcare management</p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Book Appointments Easily</h3>
              <p className="text-gray-600">
                Schedule appointments with top doctors in just a few clicks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Access Medical Records</h3>
              <p className="text-gray-600">
                Securely access your medical records anytime, anywhere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Notifications</h3>
              <p className="text-gray-600">
                Get instant updates about your appointments and health tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;