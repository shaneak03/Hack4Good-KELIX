import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
// import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <NavBar logo="https://via.placeholder.com/40" navItems={['Home', 'Products', 'About']} />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
