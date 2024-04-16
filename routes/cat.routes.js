const express = require('express');
const router = express.Router();
const {
  createCat,
  readCats,
  updateCat,
  deleteCat
} = require('../controllers/cat.controller');

router.post('/:id/:name', createCat);
router.get('/', readCats);
router.put('/:id/:name', updateCat);
router.delete('/:id', deleteCat);

module.exports = router;