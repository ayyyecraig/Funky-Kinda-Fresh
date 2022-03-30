
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

 function YourFerm() {
  let navigate = useNavigate();
  const handleSubmit = (e) => {

    navigate('/FermNat')
  }
  
 

  let users = [
    {label: "user123", value: "user123"},
    {label: "becky219", value: "becky219"},
    {label: "heffany49", value: "heffany49"}
  ]
    const [user ,setUser] = useState("");
    const handleSelect = (e) => {
      console.log(e.target.value);
      setUser(e.target.value);
    }
  
  let fermtype = [
    {label: "Lactic Acid", value: "Lactic Acid" },
    {label: " Ethanol", value: "Ethanol"},
    {label: "Acetic Acid", value: "Acetic Acid"}
  ]

  const [ferm,setFerm] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value)
    setFerm(e.target.value)
  }

 

  const [perserve] = useState("");
  const [descriptions] = useState("");


    return (
      <div className='YourFerm' k>
        <form onSubmit={ handleSubmit}>
          <select className='name' onChange={handleSelect}>
            <option value="">--User--</option>
              {users.map((user) =>
            <option value={user.value}>{user.label}</option>)}
            <option></option>
          </select>
          <select className='type' onChange={handleChange}>
            <option>Ferment Type</option>
              {fermtype.map((ferm) =>
            <option value={ferm.value}>{ferm.label}</option>)}
           </select>
          <input value={perserve.value}>{perserve.label}</input>
          <input value={perserve.value} onChange={handleChange}></input>
          <button className='btn'>Submit</button>
       </form>
      </div>
    )
    }

  
export default YourFerm