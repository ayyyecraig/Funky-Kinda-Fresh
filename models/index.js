const mongoose = require('mongoose')
const FermentSchema = require('./Ferment')
const AddYourSchema = require('./AddYour')

const Ferment = mongoose.model('ferment', FermentSchema)
const AddYour = mongoose.model('addYour', AddYourSchema)

module.exports = {
    Ferment,
    AddYour
}