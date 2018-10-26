const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application')
const martialartsController = require('../controllers/martialarts')
const stylesController = require('../controllers/styles')
const studentsController = require('../controllers/students')

router.get('/', applicationController.index)

router.get('/martialarts', martialartsController. index)
router.get('/martialarts/new', martialartsController. new)
router.get('/martialarts/:martialartsId', martialartsController. show)
router.get('/students', studentsController.index)
router,get('/students/new', studentsController. new)
router.get('/students/:studentsId', studentsController.show )
router.get('/styles',stylesController.index)
router.get('/styles/new', stylesController. new)
router.get('/styles/:stylesId', stylesController. show)
router.get(`/martialarts/:martialartsId/students/studentsId`, studentsController.show)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
