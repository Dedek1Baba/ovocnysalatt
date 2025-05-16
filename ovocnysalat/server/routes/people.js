var express = require('express');
var router = express.Router();

const peopleController = require('../controllers/people');

/** 
 * Get all people
 * Method GET
 * URL: /people
*/
router.get('/', peopleController.getAllPeople);

/** 
 * Get one person by id
 * Method GET
 * URL: /people/:id
*/
router.get('/:id', peopleController.getPersonById);

/** 
 * create peson
 * Method POST
 * URL: /people
*/
router.post('/',peopleController.createPerson);

/** 
 * Delete person
 * Method DELETE
 * URL: /people/:id
*/
router.delete('/:id', peopleController.createPerson);

/** 
 * update person
 * Method put
 * URL: /people/:id
*/
router.put('/:id', peopleController.updatePerson);

module.exports = router;