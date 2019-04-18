const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Vampire = require('vampire');







const port = 3000;
app.listen('port', () => {
    console.log('vampires be listeing to the servers hum');
})