const { request, response } = require
const { Ferment } = require('../models')

const postNew = async (
    request, response) =>{
        let newFerm = await new Ferment({
            user: request.body.users,
            fermentType: request.body.fermentType,
            perserve: request.body.perserve,
            description: request.body.description

        })
       
        request.json(newFerm)
        response.json(ferment)
        newFerm.save()
    }
   


    module.exports ={
        postNew
    }