const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(express.static(process.env.STATIC_FILE_DIR));

// proxy calls to the stations endpoint to the Gas feed webservice
app.use('/stations/:latitude/:longitude/:radius/:fuelType/:sortBy', proxy(process.env.GAS_FEED_HOST,{
    proxyReqPathResolver: (req) => {
        const url = `${process.env.GAS_FEED_PATH}${req.params.latitude}/${req.params.longitude}` +
                    `/${req.params.radius}/${req.params.fuelType}/${req.params.sortBy}/${process.env.GAS_FEED_KEY}`;
        return url;
    }
}));

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);