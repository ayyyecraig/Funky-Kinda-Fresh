import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {

    return (
     <header>
        <div className='navbar'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/FermNat">Fermentation Nation</NavLink>
          
              <NavLink to="/Add.jsx">Your Ferments</NavLink>
        </div>
     </header>
    )
}

export default Nav