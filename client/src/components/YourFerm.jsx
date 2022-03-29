
import React, { useState } from 'react';
 
 function YourFerm() {
  let users = [
    {label: "user123", value: "user123"},
    {label: "becky219", value: "becky219"},
    {label: "heffany49", value: "heffany49"}
  ]
    const [user, setUser] = useState("");
    const handleSelect = (e) => {
      console.log(e.target.value);
      setUser(e.target.value);
    }
  
  let fermtype = [
    {label: "Lactic Acid", value: "Lactic Acid" },
    {label: " Ethanol", value: "Ethanol"},
    {label: "Acetic Acid", value: "Acetic Acid"}
  ]

  const [ferm, setFerm] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value)
    setUser(e.target.value)
  }

  let perservative = [
    { type: "text-area", value: ""}
  ]

    return (
      <div className='YourFerm'>
      <select className='name' onChange={handleSelect}>
        <option value="">--User--</option>
        {users.map((user) =>
        <option value={user.value}>{user.label}</option>)}
        <option></option>
      </select>
      <select className='type'>
        <option>Ferment Type</option>
        {fermtype.map((ferm) =>
        <option value={ferm.value}>{ferm.label}</option>)}
      </select>
    
      <button className='btn'>Submit</button>

  
      </div>
    )
    }

  
export default YourFerm