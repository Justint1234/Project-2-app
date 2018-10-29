const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application')
const martialartsController = require('../controllers/martialarts')
const stylesController = require('../controllers/styles')
const studentsController = require('../controllers/students')
const weaponsController = require('../controllers/weapons')
const historyController = require('../controllers/history')

router.get('/', applicationController.index)

router.get('/martialarts', martialartsController.index)
router.get('/martialarts/new', martialartsController.new)
router.get('/martialarts/:martialartsId', martialartsController.show)
router.get('/students', studentsController.index)
router.get('/students/new', studentsController.new)
router.get('/students/:studentsId', studentsController.show )
router.get('/styles',stylesController.index)
router.get('/styles/new', stylesController.new)
router.get('/styles/:stylesId', stylesController.show)
router.get(`/martialarts/:martialartsId/students/studentsId`, studentsController.show)
router.get('/weapons', weaponsController.index)
router.get('/weapons/new', weaponsController.new)
router.get('/weapons/:weaponsId', weaponsController.show)
router.get('/history/', historyController.index)
router.get('/history/new' , historyController.new )
router.get('history/:historyId', historyController.show)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
