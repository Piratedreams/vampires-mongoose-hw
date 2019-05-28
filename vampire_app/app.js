const express = require('express');
const app = express();
const Vampire = require('./models/vampire')

const vampire = require('Vampire');
const vampireCollection = require('vampireCollection');

Vampire.collection.insertMany(vampireData, (err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
});


const connectionString = 'mongodb://localhost/vamp'
mongoose.connect(connectionString, { useNewUrlParser: true })

const vampireData = require('./populateVampires')
Vampire.collection.insertMany(vampireData, (err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
});


const port = 3000;
app.listen(3000, () => {
    console.log('vampires be listeing to the servers hum');
})