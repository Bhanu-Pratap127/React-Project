import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import ShayariPage from './Components/Pages/ShayariPage'

const App = () => {
  return (
    <div>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shayari" element={<Navigate to="/shayari/1" replace />} />
        <Route path="/shayari/:page" element={<ShayariPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App