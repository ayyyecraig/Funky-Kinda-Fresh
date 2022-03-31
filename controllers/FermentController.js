
const { response } = require('express')
const res = require('express/lib/response')
const { json } = require('express/lib/response')
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

const upDate = async (request, response) =>{
    try{
    let updateFerm = await Ferment.findByIdAndUpdate(request.params.id, request.body, {
        new: true
    })
    return response.status(200).json(updateFerm)
} catch (err) {
    return response.status(500).json(err)
}}

const deleteFerm = async (req, res) =>{
    try{
    const { id } = req.params;
    let deleted = await Ferment.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send("deleted");
    }
    throw new Error("Not found");
    } catch (err) {
      return res.status(500).send(error.message);
    }
    
}


module.exports ={
    getFerments,
    postNew,
    upDate,
    deleteFerm
}