const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application')
const martialartsController = require('../controllers/martialarts')
const stylesController = require('../controllers/styles')
const studentsController = require('../controllers/students')

router.get('/', applicationController.index)




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
