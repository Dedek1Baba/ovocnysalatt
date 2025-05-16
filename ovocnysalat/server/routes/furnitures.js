var express = require('express');
var router = express.Router();

const furnituresController = require('../controllers/furnitures');

/** 
 * Get all furnitures
 * Method GET
 * URL: /furnitures
*/
router.get('/', furnituresController.getAllFurnitures);

/** 
 * Get one furniture by id
 * Method GET
 * URL: /furnitures/:id
*/
router.get('/:id', furnituresController.getFurnitureById);

/** 
 * create peson
 * Method POST
 * URL: /furnitures
*/
router.post('/',furnituresController.createFurniture);

/** 
 * Delete furniture
 * Method DELETE
 * URL: /furnitures/:id
*/
router.delete('/:id', furnituresController.createFurniture);

/** 
 * update furniture
 * Method put
 * URL: /furnitures/:id
*/
router.put('/:id', furnituresController.updateFurniture);

module.exports = router;