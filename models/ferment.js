const { Schema } = require('mongoose')

const Ferment = new Schema(
    {
        name:{ type: String, required: true },
        typeFerment:{ type: String, required: true },
        img: { type: String, required: false },
        perserve: { type: String, required: false },
        description: { type: String, required: false}
    },
    { timestamps: true}
)

module.exports = Ferment