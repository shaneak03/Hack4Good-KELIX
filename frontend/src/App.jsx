import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
// import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ippoixgdxjmmorkzewvr.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseKey) {
  console.error('Supabase key is not set');
}

let supabase;

try {
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('Supabase client created successfully');
} catch (error) {
  console.error('Error creating Supabase client:', error);
}

async function insertData() {
  try {
    console.log('Attempting to insert data...');
    const { data, error } = await supabase
      .from('Personnel_Student')
      .insert([
        { User_Name: 'admin', Password: 'password' }
      ]);

    if (error) {
      throw error;
    } else {
      console.log('Data inserted:', data);
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!supabase) {
      console.error('Supabase client is not initialized');
    }
  }, []);

  function handleClick() {
    insertData();
  }

  return (
    <>
      <button onClick={handleClick}>Test Supabase Insert</button>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={() => { setIsLoggedIn(true); insertData(); }} />} />
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
