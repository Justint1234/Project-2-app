const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application')
const martialartsController = require('../controllers/martialarts')
const stylesController = require('../controllers/styles')
const studentsController = require('../controllers/students')

router.get('/', applicationController.index)

router.get('/stores', martialartsController. index)
router.get('/martialarts/new', martialartsController. new)
router.get('/martialarts/:martialartsId', martialartsController. show)
router.get(`/styles`, stylesController.index)
router.get(`/martialarts/:martialartsId/styles/stylesId`, stylesController.show)
router.get()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
