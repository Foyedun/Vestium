import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    </>
  )
}

export default App
