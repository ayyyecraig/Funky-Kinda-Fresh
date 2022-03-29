const { Schema } = require('mongoose')


const AddYour = new Schema(
    {
       users: { type: String, required: true },
       fermentType: { type: String, required: true },
       perservative: { type: String, required: true },
       feed: { type: String, required: true },
       img: { type: String, required: false },
       notes: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = AddYour

