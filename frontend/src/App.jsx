import React from 'react'
import ProductPage from './pages/ProductPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar logo="https://via.placeholder.com/40" navItems={['Home', 'Products', 'About']} />
      <ProductPage />
    </>
  )
}

export default App
