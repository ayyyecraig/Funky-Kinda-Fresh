import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

 

  const FermNat = () => {
    const [ferments, setFerments] = useState([])
    const [ name, setFermentName] = useState([])
    const [fermImg, setFermImg] = useState([])
    const [fermDesc, setFermDesc] = useState([])
    const [fermType, setFermType] = useState([])

    useEffect(() => {
      
      let nameArr = []
      let fermImgLinkArr= []
      let fermDescArr= []
      let fermTypeArr= []

      const getFerments = async () => {

        let res = await axios.get('http://localhost:3001/FermNat')
        setFerments(res.data)

        ferments.map((ex) =>{
         nameArr.push(ex.name)
          fermImgLinkArr.push(ex.img)
          fermDescArr.push(ex.description)
          fermTypeArr.push(ex.typeFerment)
        })

        setFermentName(nameArr)
        setFermImg(fermImgLinkArr)
        setFermDesc(fermDescArr)
        setFermType(fermTypeArr)
      }

      getFerments()
    }, [])

    return(
      <div>
        <ul className="FermentGrid">
          <li>
            <img src={fermImg[0]} alt="pic1" className="img"/>
            <h4>{name[0]}</h4>
            <h5>{fermType[0]}</h5>
            <p>{fermDesc[0]}</p>
          </li>
          <li>
          <img src={fermImg[1]} alt="pic2" className="img"/>
            <h4>{name[1]}</h4>
            <h5>{fermType[1]}</h5>
            <p>{fermDesc[1]}</p>
          </li>
        </ul>
      </div>
    )
  }
  


export default FermNat