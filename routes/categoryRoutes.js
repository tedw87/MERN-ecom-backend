const express = require('express');
const router = express.Router();
const {
  getCatergories,
  newCategory,
} = require('../controllers/categoryController');

router.get('/', getCatergories);
router.post('/', newCategory);

module.exports = router;
