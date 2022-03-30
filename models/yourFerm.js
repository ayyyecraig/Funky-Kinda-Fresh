const { Schema } = require('mongoose')


const AddYour = new Schema(
    {
       users: { type: String, required: true },
       fermentType: { type: String, required: true },
       perserve: { type: String, required: false},
       description: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = AddYour

