require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log('Base de datos ONLINE');

});
mongoose.set('useCreateIndex', true);




app.listen(process.env.PORT, () => {
    console.log('Escuchando al puerto', process.env.PORT);
});