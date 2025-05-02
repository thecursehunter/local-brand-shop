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
 * custom modules
 */
const home = require('./src/routes/home.route.js');

/**
 * initial express app
 */

const app = express();

/**
 * setting ejs as view engine
 */

app.set('view engine', 'ejs');


/**
 * setting public folder
 */
app.use(express.static('${__dirname}/public'));

/**
 * setting helmet for security
 */
app.use(helmet());

/**
 * home page
 */
app.use('/', home);

app.listen(process.env.PORT, () => {
    console.log(`app listening on http://localhost:${process.env.PORT}`);
});