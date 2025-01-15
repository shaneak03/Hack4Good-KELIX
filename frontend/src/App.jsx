import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navItems = [
    { label: 'Products', path: '/products'},
    { label: 'Tasks', path: '/tasks'},
  ];
  const navItemsAdmin = [
    { label: 'Products', path: '/product-admin'},
    { label: 'Tasks', path: '/tasks'},
    { label: 'Requests', path: '/requests'},
    { label: 'Users', path: '/users'},
    { label: 'Reports', path: '/reports'},
  ]
  return (
    <>
      <Router>
        <Routes> 
          <Route path="/login" element={<Login onLogin={() => { setIsLoggedIn(true); insertData(); }} />} />
          <Route path="/change-password" element={<ChangePassword />} />
          {isLoggedIn ? (
            <>
              <Route path="/" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItems} bankValue={300} /><HomePage /></>} />
              <Route path="/products" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItems} bankValue={300} /><ProductPage /></>} />
              <Route path="/tasks" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItems} bankValue={300} /><TaskPage /></>} />
              <Route path="/task-detail/:id" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItems} bankValue={300} /><TaskDetail /></>} />
              <Route path="/profile" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItems} bankValue={300} /><ProfilePage /></>} />
              <Route path="/requests" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><RequestsPage /></>} />
              <Route path="/users" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><UsersPage /></>} />
              <Route path="/edit-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><EditUser /></>} />
              <Route path="/add-user" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><AddUser /></>} /> 
              <Route path="/reports" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><ReportsPage /></>} />
              <Route path="/product-admin" element={<><NavBar logo="https://via.placeholder.com/40" navItems={navItemsAdmin} bankValue={300} /><ProductAdminPage /></>} />
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
