import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom';
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

import { supabase } from '../src/utils/supabaseClient';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (adminStatus) => {
    console.log('isAdmin in App before set:', adminStatus);
    setIsAdmin(adminStatus);
    setIsLoggedIn(true);
    console.log('isAdmin in App after set:', isAdmin);
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
          {isLoggedIn ? (
            <>
              <Route path="/" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} /><HomePage /></>} />
              <Route path="/products" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} /><ProductPage /></>} />
              <Route path="/tasks" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} /><TaskPage /></>} />
              <Route path="/task-detail/:id" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} /><TaskDetail /></>} />
              <Route path="/profile" element={<><NavBar logo="https://via.placeholder.com/40" navItems={isAdmin ? navItemsAdmin : navItems} bankValue={300} /><ProfilePage /></>} />
              <Route path="/requests" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><RequestsPage /></>} />
              <Route path="/users" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><UsersPage /></>} />
              <Route path="/edit-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><EditUser /></>} />
              <Route path="/add-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><AddUser /></>} /> 
              <Route path="/reports" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><ReportsPage /></>} />
              <Route path="/product-admin" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><ProductAdminPage /></>} />
              <Route path="/product-add" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><AddProduct /></>} />
              <Route path="/product-edit" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><EditProduct /></>} />
              <Route path="/transactions" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><TransactionHistory /></>} />
              <Route path="/tasks-admin" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><TaskAdminPage /></>} />
              <Route path="/task-edit" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><EditTask /></>} />
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
