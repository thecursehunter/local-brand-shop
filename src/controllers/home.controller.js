/** 
 * @license Apache-2.0
 * @copyright 2025 Pham Quang Minh
*/

'use strict';

const home = async (req, res) => {
    res.render('./pages/home');
}

module.exports = { home }