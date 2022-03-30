const db = require('../db')
const { Ferment, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ferments = await Ferment.find()
  

  const reviews = [
    {
        users: "becky219",
        fermentType:"acetic",
        review: "sjeiojudhw",
        ferment_id:ferments[0]._id

      
    },
    {
        users: "becky213",
        fermentType:"acetic",
        review: "sjeiojudhw",
        ferment_id:ferments[1]._id
    },
    {
        users: "heffany49",
        fermentType:"acetic",
        review: "sjeiojudhw",
        ferment_id:ferments[0]._id
    }
  ]

  await Review.insertMany(reviews)
  console.log("reviews")
}
const run = async () => {
  await main()
  db.close()
}

run()