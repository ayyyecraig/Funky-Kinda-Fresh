import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


export default function FermNatForm() {
    const {id} = useParams()
    console.log(id)


let fermtype = [
        {label: "Lactic Acid", value: "Lactic Acid" },
        {label: " Ethanol", value: "Ethanol"},
        {label: "Acetic Acid", value: "Acetic Acid"}
]
   
const [ferments, setFerments] = useState({
        name: "",
        typeFerment: "",
        img: "",
        perserve: "",
        description: ""
      
});


const updateFerments = async () => {
    let updateFerment = await axios.update('http://localhost:3000/FermNat/:id/update', ferments)
    console.log(updateFerment)
}
  
const handleChange = (e) => {
    setFerments({ ...ferments, [e.target.name]: e.target.value })
  }
   
  
  const handleSubmit = (e) => {
    e.preventDefault()
    updateFerments()
  }
  
  
  


return (
    <div className='YourFermupdate'>
    <div className='updateRecipe'>Update This Recipe</div>
    <form onSubmit={handleSubmit}>
        <select className='type' onChange={handleChange} name={"typeFerment"}>
          <option >Ferment Type</option>
            {fermtype.map((ferm) =>
          <option value={ferm.value}>{ferm.label}</option>)}
        </select>
        <input type="text" value={ferments.name} onChange={handleChange} name={'name'} placeholder={'name'} />
        <input type="text" value={ferments.perserve} onChange={handleChange} name={'perserve'} placeholder={'perservatives and percentages'} />
        <h4>The Process</h4>
        <input type="text" value={ferments.description} onChange={handleChange} name={'description'}  className="description" />
        <input type="text" value={ferments.img} onChange={handleChange} name={'img'} placeholder={'Images'} />
        
        <button className='btn'>Update</button>
      </form>
  </div>
)
}


