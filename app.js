const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 2020

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(express.static(path.join(__dirname, 'build')));

app.use('/', require('./routes/index'))

app.use(morgan('tiny'));

app.listen(port, () => {
    console.log('Listening on PORT: ' + port)
})
