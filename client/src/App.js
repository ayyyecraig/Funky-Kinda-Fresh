import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Add from './components/Add'
import FermNat from './components/FermNat'
import Home from './components/Home'

export default function App() {
  return (
    <div>
      <header>
        <Nav />
        </header>
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Add' element={<Add />} />
      <Route path='/FermNat' element={<FermNat />} />
    </Routes>
    </main>
    </div>


  )
}
