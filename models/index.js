const mongoose = require('mongoose')
const FermentSchema = require('./Ferment')
// const AddYourSchema = require('./AddYour')
const ReviewSchema = require('./review')

const Ferment = mongoose.model('ferment', FermentSchema)
// const AddYour = mongoose.model('addYour', AddYourSchema)
const Review = mongoose.model('review', ReviewSchema)

module.exports = {
    Ferment,
    // AddYour,
    Review
}