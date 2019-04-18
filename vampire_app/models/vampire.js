const vampireSchema = new Schema({
    name: { type: String, required: true},
    hair_color: {type: String, required: true},
    eye_color: {type: String, required: true},
    dob: {type: Date, required: true},
    loves: [{type: String, required: true}],
    location: {type: String, required: true},
    gender: {type: String, required: true, maxLength: 1},
    victims: {type: Number, required: true, minNumber: 1}
})
// a schema is short for schematic so it's like a blueprint for objects just like a class
// but it works differently since these are forms that must be filled out and answered.
// essentially like if you were to fill out our card information for a payment
// that would be filling in the data from a shcema.

module.exports = vampire;