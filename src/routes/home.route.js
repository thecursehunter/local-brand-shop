/** 
 * @license Apache-2.0
 * @copyright 2025 Pham Quang Minh
*/

'use strict';

/**
 * node modules
 */

const router = require ('express').Router();

/**
 * custom modules
 */
const { home } = require('../controllers/home.controller');

router.get('/', home);

module.exports = router;