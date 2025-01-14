import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
// import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/change-password" element={<ChangePassword />} />
          {isLoggedIn ? (
            <>
              <Route path="/" element={<><NavBar logo="https://via.placeholder.com/40" navItems={['Home', 'Products', 'About']} bankValue={300} /><ProductPage /></>} />
              {/* Add other routes here */}
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
