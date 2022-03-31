import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


// These are the ferment types
let fermtype = [
  {label: "Lactic Acid", value: "Lactic Acid" },
  {label: " Ethanol", value: "Ethanol"},
  {label: "Acetic Acid", value: "Acetic Acid"}
]

function FermentForm() { 
const [ferment, setFerment] = useState({
  name: "",
  typeFerment: "",
  img: "",
  perserve: "",
  description: ""

});

const createFerment = async () => {
  let newFerment = await axios.post('http://localhost:3001/ferments', ferment)
  console.log(newFerment)
}

const handleChange = (e) => {
  setFerment({ ...ferment, [e.target.name]: e.target.value })
}
 

const handleSubmit = (e) => {
  e.preventDefault()
  createFerment()
}





  return (
    <div className='YourFerm'>
      <h1 className='headline'>Add Your Favorite Recipe!</h1>
      <form onSubmit={handleSubmit}>
        <select className='type' onChange={handleChange} name={"typeFerment"}>
          <option >Ferment Type</option>
            {fermtype.map((ferm) =>
          <option value={ferm.value}>{ferm.label}</option>)}
        </select>
        <input type="text" value={ferment.name} onChange={handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={ferment.perserve} onChange={handleChange} name={'perserve'} placeholder={'perservatives and percentages'} />
        <h4>The Process</h4>
        <input type="text" value={ferment.description} onChange={handleChange} name={'description'}  className="description" />
        <input type="url" value={ferment.img} onChange={handleChange} name={'img'} placeholder={'Images'} />
        
        <button className='btn'>Submit</button>
      </form>
    </div>
  )

}
  
export default FermentForm