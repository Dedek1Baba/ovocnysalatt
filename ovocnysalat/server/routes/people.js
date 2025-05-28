var express = require('express');
var router = express.Router();

const peopleController = require('../controllers/people');

/** 
 * Get all people
 * Method GET
 * URL: /people
*/
router.get('/', peopleController.getAllSalads);

/** 
 * Get one person by id
 * Method GET
 * URL: /people/:id
*/
router.get('/:id', peopleController.getSaladById);

/** 
 * create peson
 * Method POST
 * URL: /people
*/
router.post('/',peopleController.createSalad);

module.exports = router;