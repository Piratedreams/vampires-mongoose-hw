const express = require('express');
const app = express();
const Vampire = require('./models/vampire')

const vampire = require('Vampire');
const vampireCollection = require('vampireCollection');

Vampire.collection.insertMany(vampireCollection, (err, data) => {
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




vampire.find({ gender: 'f' }, (err, createdVamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(createdVamp);
        }
    });

vampire.find({ victims: { $gt: '500' } }, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
});

vampire.find({ victims: { $lte: '150' } }, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({victims: {$ne: '210234'}}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({ victims: { $gt: '150', $lt: '500' } }, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 


vampire.find({title: {$exists: true}}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({victims: {$exists: false}}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({victims: {$exists: false}, title: {$exists: true}}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 


//  Or selection

vampire.find({ $or: [{ location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }] }, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 


vampire.find({ $or: [{ loves: 'brooding' }, { loves: 'being tragic' }] }, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, createdVamp) => {
    if(err){
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 

vampire.find({ $or: [{ hair_color: 'red' }, { eye_color: 'green' }] }, (err, createdVamp) => {
    if (err) {
        console.log(err);
    } else {
        console.log(createdVamp);
    }
}); 


const port = 3000;
app.listen(3000, () => {
    console.log('vampires be listeing to the servers hum');
})