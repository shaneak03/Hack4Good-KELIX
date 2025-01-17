import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import TaskPage from './pages/TaskPage';
import TaskDetail from './pages/TaskDetail';
import ProfilePage from './pages/ProfilePage';
import RequestsPage from './pages/RequestsPage';
import UsersPage from './pages/UsersPage';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import ReportsPage from './pages/ReportsPage';
import ProductAdminPage from './pages/ProductAdminPage';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import TransactionHistory from './pages/TransactionHistory';
import TaskAdminPage from './pages/TaskAdminPage';
import EditTask from './pages/EditTask';
import BondsPage from './pages/BondsPage';

import { supabase } from '../src/utils/supabaseClient';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [id, setId] = useState('');

  const handleLogin = (adminStatus, id) => {
    console.log('isAdmin in App before set:', adminStatus);
    setIsAdmin(adminStatus);
    setIsLoggedIn(true);
    console.log('isAdmin in App after set:', isAdmin);
    console.log('id in App:', id);
    setId(id);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
    setId("");
  };

  const navItems = [
    { label: 'Products', path: '/products'},
    { label: 'Tasks', path: '/tasks'},
  ];
  const navItemsAdmin = [
    { label: 'Products', path: '/product-admin'},
    { label: 'Tasks', path: '/tasks-admin'},
    { label: 'Requests', path: '/requests'},
    { label: 'Users', path: '/users'},
    { label: 'Reports', path: '/reports'},
    { label: 'Transactions', path: '/transactions'},
  ]
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/bonds" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><BondsPage /></>} /> 
          {isLoggedIn ? (
            <>
              <Route path="/" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} onLogout={handleLogout} /><HomePage /></>} />
              <Route path="/products" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} onLogout={handleLogout} /><ProductPage /></>} />
              <Route path="/tasks" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} onLogout={handleLogout} /><TaskPage /></>} />
              <Route path="/task-detail/:id" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} onLogout={handleLogout} /><TaskDetail /></>} />
              <Route path="/profile" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} onLogout={handleLogout} /><ProfilePage /></>} />
              <Route path="/requests" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><RequestsPage /></>} />
              <Route path="/users" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><UsersPage /></>} />
              <Route path="/edit-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><EditUser /></>} />
              <Route path="/add-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><AddUser /></>} /> 
              <Route path="/reports" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><ReportsPage /></>} />
              <Route path="/product-admin" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><ProductAdminPage /></>} />
              <Route path="/product-add" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><AddProduct /></>} />
              <Route path="/product-edit" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><EditProduct /></>} />
              <Route path="/transactions" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><TransactionHistory /></>} />
              <Route path="/tasks-admin" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><TaskAdminPage /></>} />
              <Route path="/task-edit" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} onLogout={handleLogout} /><EditTask /></>} />
              
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
