
const  { Ferment }  = require('../models')

const getFerments = async ( request, response) => {
   
    let ferments = await Ferment.find() 
    response.json(ferments)
}

const postNew = async (request, response) =>{
    let newFerm = await new Ferment(request.body)
       newFerm.save()
     response.send(newFerm)  
}
   

module.exports ={
    getFerments,
    postNew
}