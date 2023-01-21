import React from 'react'
import './app.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
