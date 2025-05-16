var express = require('express');
var router = express.Router();

const programmersController = require('../controllers/programmers');

/** 
 * Get all programmers
 * Method GET
 * URL: /programmers
*/
router.get('/', programmersController.getAllProgrammers);

/** 
 * Get one programmer by id
 * Method GET
 * URL: /programmers/:id
*/
router.get('/:id', programmersController.getProgrammerById);

/** 
 * create peson
 * Method POST
 * URL: /programmers
*/
router.post('/',programmersController.createProgrammer);

/** 
 * Delete programmer
 * Method DELETE
 * URL: /programmers/:id
*/
router.delete('/:id', programmersController.createProgrammer);

/** 
 * update programmer
 * Method put
 * URL: /programmers/:id
*/
router.put('/:id', programmersController.updateProgrammer);

module.exports = router;