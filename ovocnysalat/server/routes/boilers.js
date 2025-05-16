var express = require('express');
var router = express.Router();

const boilersController = require('../controllers/boilers');

/** 
 * Get all boilers
 * Method GET
 * URL: /boilers
*/
router.get('/', boilersController.getAllBoilers);

/** 
 * Get one boiler by id
 * Method GET
 * URL: /boilers/:id
*/
router.get('/:id', boilersController.getBoilerById);

/** 
 * create peson
 * Method POST
 * URL: /boilers
*/
router.post('/',boilersController.createBoiler);

/** 
 * Delete boiler
 * Method DELETE
 * URL: /boilers/:id
*/
router.delete('/:id', boilersController.createBoiler);

/** 
 * update boiler
 * Method put
 * URL: /boilers/:id
*/
router.put('/:id', boilersController.updateBoiler);

module.exports = router;