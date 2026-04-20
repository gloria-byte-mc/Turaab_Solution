import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'


const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>

    </>
  )
}

export default App