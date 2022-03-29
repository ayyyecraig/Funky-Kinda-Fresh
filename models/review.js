const { Schema } = require('mongoose')

const Review = new Schema(
    {
        users: { type: String, required: true },
        fermentType: { type: String, required: true },
        review: { type: String, required: true },
        ferment_id:{ type: Schema.Types.ObjectId, ref:'ferment_id'}
    },
    { timestamps: true }
)

module.exports = Review