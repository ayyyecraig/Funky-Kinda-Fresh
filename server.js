const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const {Ferment} = require('./models')
const FermentController = require('./controllers/FermentController.js')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})
// app.get('/FermNat', async (req, res) =>{
//  let foundFerms = await Ferment.find()
//  res.json(foundFerms)
// })

app.get('/FermNat',
FermentController.getFerments)

app.post('/')
// app.post('/FermNat', AddingNew.postNew)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})