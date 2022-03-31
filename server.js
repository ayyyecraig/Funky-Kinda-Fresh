const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

const { Ferment, Review } = require('./models')


app.use(cors())
app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

const FermentController = require('./controllers/FermentController.js')


app.get('/FermNat', FermentController.getFerments)

app.get('/reviews', (req,res) => { 
  async function getReviews() {
  const reviews = await Review.find()
  console.log(reviews)
  res.json(reviews)
  }
  getReviews()
} )

app.post('/ferments', FermentController.postNew)

app.put('/FermNat/:id', FermentController.upDate)

app.delete('/ferments/:id', FermentController.deleteFerm)


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})