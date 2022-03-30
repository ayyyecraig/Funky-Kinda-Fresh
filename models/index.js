const mongoose = require('mongoose')
const FermentSchema = require('./Ferment')
const YourFermSchema = require('./YourFerm')
const ReviewSchema = require('./review')

const Ferment = mongoose.model('ferment', FermentSchema)
const YourFerm = mongoose.model('yourFerm', YourFermSchema)
const Review = mongoose.model('review', ReviewSchema)

module.exports = {
    Ferment,
    YourFerm,
    Review
}