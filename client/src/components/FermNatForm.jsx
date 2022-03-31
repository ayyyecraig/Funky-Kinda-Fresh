import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import FermentForm from './FermentForm';

export default function FermNatForm() {
    const {id} = useParams()
    console.log(id)


let fermtype = [
        {label: "Lactic Acid", value: "Lactic Acid" },
        {label: " Ethanol", value: "Ethanol"},
        {label: "Acetic Acid", value: "Acetic Acid"}
]
   
const [ferment, setFerment] = useState({
        name: "",
        typeFerment: "",
        img: "",
        perserve: "",
        description: ""
      
});


const updateFerments = async () => {
    let updateFerment = await axios.post('http://localhost:3000/FermNat/:id/update', ferment)
    console.log(updateFerment)
}
  


return (
    <div className='YourFerm'>
    <div>Update This Recipe</div>
  </div>
)
}


