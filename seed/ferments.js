const db = require('../db')
const { Ferment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
 const ferments = [
     {
        name: 'fruit based Vinegars',
        typeFerment: ' Acetic Acid Hetero Fermentation',
        img: 'https://i.guim.co.uk/img/media/46a0102ba347613a9798e30a25d0e6184134bf2d/0_188_4814_2889/master/4814.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=765cab4ba96ca48069011560c7ab3183',
        preserve: "water and sugar",
        description: 'usually High sugar fruits are best for this experiment, but any overriped fruits, scraps, and a dash of herbs are very good sources  ! Great sustainable way of incorporating unused fruits and herbs!'
     },
     {
        name: 'Nukadoko',
        typeFerment: 'lactic acid homo fermentation',
        img: 'https://i.pinimg.com/originals/0c/46/f6/0c46f6e2c16b5fcd0632737ea945de85.jpg',
        preserve: 'salt: 13% of rice brans weight',
        description: 'Toasted Rice bran cooled and mixed with salted water to create amazing pickles of any kind! Adding a bit of comb adds a great depth of flavor!'
        

     },
     
 ]
 await Ferment.insertMany(ferments)
 console.log('Sizzle')
}

const run = async () => {
    await main()
    db.close()
}

run()