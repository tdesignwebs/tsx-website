import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar.tsx'
import Card from './Components/Card.tsx'

import Showcase from './Components/Showcase.tsx'
const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <>
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="container-grid">
        <Card theme={theme} setTheme={setTheme} name="website 1" text='name-string' />
        <Card theme={theme} setTheme={setTheme} name="website 2" text='name-string' />
        <Card theme={theme} setTheme={setTheme} name="website 3" text='name-string' />
        <Card theme={theme} setTheme={setTheme} name="website 4" text='name-string' />
        <Card theme={theme} setTheme={setTheme} name="website 5" text='name-string' />
        <Card theme={theme} setTheme={setTheme} name="website 6" text='name-string' />
      </div>
      <Showcase />
    </div>
      <div className={`container-1 ${theme}`}>
        <div className="container-grid-1">
         
        </div>
        <Showcase />
      </div>
    </>
  )
}

export default App
