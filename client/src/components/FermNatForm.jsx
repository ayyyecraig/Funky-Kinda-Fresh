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
    {/* <form onSubmit={handleSubmit}>
      <select className='type' onChange={handleChange} name={"typeFerment"}>
        <option >Ferment Type</option>
          {fermtype.map((ferm) =>
        <option value={ferm.value}>{ferm.label}</option>)}
      </select>
      <input type="text" value={ferment.name} onChange={handleChange} name={'name'} placeholder={'name'} />
      <input type="text" value={ferment.perserve} onChange={handleChange} name={'perserve'} placeholder={'perserve'} />
      <input type="text" value={ferment.description} onChange={handleChange} name={'description'} placeholder={'description'} />
      <input type="text" value={ferment.img} onChange={handleChange} name={'img'} placeholder={'Images'} />
      
      <button className='btn'>Submit</button>
    </form> */}
    <div>Updating Ferment Recipe</div>
  </div>
)
}


