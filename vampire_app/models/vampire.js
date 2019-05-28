const mongoose = require('mongoose')

const vampireSchema = new mongoose.Schema({
    name: { type: String, required: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String, required: true},
    dob: {type: Date,},
    loves: [{type: String, }],
    location: {type: String, },
    gender: {type: String, maxLength: 1},
    victims: {type: Number, min:  1 }
})
// a schema is short for schematic so it's like a blueprint for objects just like a class
// but it works differently since these are forms that must be filled out and answered.
// essentially like if you were to fill out our card information for a payment
// that would be filling in the data from a shcema.

module.exports = mongoose.model('Vampire', vampireSchema)
