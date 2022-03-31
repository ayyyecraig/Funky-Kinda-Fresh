import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

 

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
    const deleteFerm = (ferm) =>{
      //send axios delete, request to endpoint + ferm
    }
  

    return(
      <div>
        <ul className="FermentGrid">
          {ferments.map((ferment, idx) =>{
            return(
              <div className="Grid">
              <li className="ferments" key={idx}>
      
                <img src={ferment.img} className="img2" />
                <div className="text">
                <h4>{ferment.name}</h4>
                <h5>{ferment.typeFerment}</h5>
                <p className="ptext">{ferment.description}</p>
                </div>
              </li>
              <Link to={`/FermNat/${ferment._id}/update`}><button className="manage"  >Manage</button></Link>
              <button className="delete" onClick={()=> deleteFerm(ferment._id)}>Delete</button>
        </div>
            )
          })}
      
        </ul>
       

      </div>
    )
  }



export default FermNat