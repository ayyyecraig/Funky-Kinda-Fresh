import React from "react";
import { useState } from 'react'

const Calculate = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')

const handleNum = (e, num) => {
        console.log(num)
        console.log(e.target.value)

if(num==='num1'){
    setNum1(e.target.value)
 } else if(num==='num2'){
    setNum2(e.target.value) }
       
}

const handleSolution = () => {
    if (num1 !== "" && num2 !== "") {
     setResult(parseInt(num1)*(num2))
        console.log(result)

    }
<button onClick={() => handleSolution()}>=</button>
}  
    return( <div className="container">
    <div className="Simple">
      <input type="number" placeholder="Your Contents Weight" 
           name='num1'
  
           value={num1}
           onChange={(e) => handleNum(e, 'num1')}
           />
      <span>*</span>

      <input 
      type="number"     placeholder="Percentage converted to decimal"
      name='num2'
  
      value={num2}
      
      onChange={(e) => handleNum(e, 'num2')}
       />
      <button onClick={()=> handleSolution()}>=</button>
    </div>
    <h3 className="results">{result}</h3>
    <div className="guide">
     <h4 className="baker">The Bakers Percentage</h4>
     <p className="percent"> Ingredient Percentage = </p>
     <p className="total"> Total Weight of Ingredient</p>
     <p className="flour"> Total Weight of Flour</p>
     <h5 className="one"> * 100</h5>
    </div>
  </div> 
   )
}


export default Calculate