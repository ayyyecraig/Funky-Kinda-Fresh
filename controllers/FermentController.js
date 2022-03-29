const res = require('express/lib/response')
const  { Ferment }  = require('../models')
const { request, response } = require

const getFerments = async ( request, response) => {
   
    let ferments = await Ferment.find() 
    response.json(ferments)
}


module.exports ={
    getFerments
}