import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FermentForm from './components/FermentForm'
import FermNat from './components/FermNat'
import Home from './components/Home'
import RecipeFeed from './components/RecipeFeed'
import FermNatForm from './components/FermNatForm'
import Calculate from './components/Calculate'

export default function App() {
  return (
    <div>
      <header>
        <Nav />
        </header>
    <main>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/YourFerm' element={<FermentForm />} />
      <Route path='/FermNat' element={<FermNat />} />
      <Route path='/FermNat/:id/update' element={<FermNatForm />} />
      <Route path='/RecipeFeed' element={<RecipeFeed />} />
      <Route path='/Calculate' element={<Calculate />} />
    </Routes>

    </main>
    </div>


  )
}
