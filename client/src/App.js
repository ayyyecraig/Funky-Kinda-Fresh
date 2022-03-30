import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import YourFerm from './components/YourFerm'
import FermNat from './components/FermNat'
import Home from './components/Home'
import RecipeFeed from './components/RecipeFeed'
export default function App() {
  return (
    <div>
      <header>
        <Nav />
        </header>
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/YourFerm' element={<YourFerm />} />
      <Route path='/FermNat' element={<FermNat />} />
      <Route path ='/RecipeFeed' element={<RecipeFeed />} />
    </Routes>
    </main>
    </div>


  )
}
