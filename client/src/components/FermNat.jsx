import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

 

  const FermNat = () => {
    const [ferments, setFerments] = useState([])
    
    useEffect(() => {
      

      const getFerments = async () => {

        let res = await axios.get('http://localhost:3001/FermNat')
        console.log(res.data)
        setFerments(res.data)

      }

      getFerments()
    }, [])

    return(
      <div>
        <ul className="FermentGrid">
          {ferments.map((ferment, idx) =>{
            return(
              <li key={idx}>
      
                <img src={ferment.img} className="img" />
                <h4>{ferment.name}</h4>
                <h5>{ferment.typeFerment}</h5>
                <p>{ferment.description}</p>
              </li>
            )
          })}
      
        </ul>
      </div>
    )
  }
  


export default FermNat