
import React, { useState } from 'react';
 
 function Add() {
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
  
    return (
      <div className='Add'>
       <h1>Which service are you interested in?</h1>
       <ul
          onChange={handleSelect}
          action="https://jsonplaceholder.typicode.com/posts">
          <ls selected value="Click to see options" />
          <ls value="user123" />
          <ls value="becky219" />
          <ls value="heffany49" />
        </ul>
        <p>You selected {user} </p>
        
      </div>
    )
    }

  
export default Add