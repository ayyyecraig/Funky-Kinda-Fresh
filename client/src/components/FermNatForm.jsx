import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import FermentForm from './FermentForm';

export default function FermNatForm() {
    const {id} = useParams()
    console.log(id)
    
   
return (
    <div className='YourFerm'>
    <div>Updating Ferment Recipe</div>
  </div>
)
}


