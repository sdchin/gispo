import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dog from './assets/puppy-dog.webp'
import cat from './assets/cat.jpg' 
import './App.css'
import './assets/my-styles.css'

function App() {
  return (
    <>
      {/*<div className="grid">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>*/}


      <form action="https://summer-dew-970e.chin-steven10.workers.dev/" method="GET">
      <label for="q1">Search query 1</label>
      <input type="text" id="q1" name="q1" />
      <input type="submit" value="Search" />
      </form>
    </>
  )
}

export default App
