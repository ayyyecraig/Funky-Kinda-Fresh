const { request, response } = require
const { Ferment } = require('../models')

const postNew = async (
    request, response) =>{
        let ferment = await Ferment.find()
        response.json(ferment)
    }

    module.exports ={
        postNew
    }