/**
 * @license Apache-2.0
 * @copyright 2025 Pham Quang Minh
 */

'use strict';


/**
 * node modules 
 */
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();


/**
 * custom module
 */
const home = require('./src/routes/home.route');


/**
 * Initial express app
 */
const app = express();


/**
 * Setting ejs view engine
 */
app.set('view engine', 'ejs');


/**
 * Setting public folder
 */
app.use(express.static(`${__dirname}/public`));


/**
 * Setting HTTP response secure headers
 */
app.use(helmet());

/**
 * Home page
 */
app.use('/', home);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});