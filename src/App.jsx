import React from 'react'
import SmartTask from './components/SmartTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Smart Task page */}
          <Route path="/tasks" element={<SmartTask />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App