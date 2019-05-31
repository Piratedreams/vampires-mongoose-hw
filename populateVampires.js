Vampire.collection.insertMany(vampireData, (err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
});