const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/', controller.add);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;