const { Schema } = require('mongoose')

const Ferment = new Schema(
    {
        name:{ type: String, required: true },
        typeFerment:{ type: String, required: true },
        img: { type: String, required: true },
        perserve: { type: String, required: false },
        description: { type: String, required: true }
    },
    { timestamps: true}
)

module.exports = Ferment