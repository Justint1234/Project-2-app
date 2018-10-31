const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application')
const martialartsController = require('../controllers/martialarts')
const stylesController = require('../controllers/styles')
const studentsController = require('../controllers/students')
const jackiechanController = require('../controllers/jackiechan')
const donnieyenController = require('../controllers/donnieyen')
const bruceleeController = require('../controllers/brucelee')
const jetliController = require('../controllers/jetli')
// const weaponsController = require('../controllers/weapons')
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
// router.get('/styles/create', stylesController.create)
router.get('/styles/:stylesId', stylesController.show)
router.get(`/martialarts/:martialartsId/students/studentsId`, studentsController.show)
// router.get('/weapons', weaponsController.index)
// router.get('/weapons/new', weaponsController.new)
// router.get('/weapons/:weaponsId', weaponsController.show)
router.get('/jackiechan', jackiechanController.index)
router.get('/jackiechan/new', jackiechanController.new)
router.get('/jackiechan/:jackiechanId', jackiechanController.show)
router.get('/donnieyen', donnieyenController.index)
router.get('/donnieyen/new', donnieyenController.new)
router.get('/donnieyen/:donnieyenId', donnieyenController.show)
router.get('/brucelee', bruceleeController.index)
router.get('/brucelee/new', bruceleeController.new)
router.get('/brucelee/:bruceleeId', bruceleeController.show)
router.get('/jetli', jetliController.index)
router.get('/jetli/new', jetliController.new)
router.get('/jetli/:jetliId', jetliController.show)
router.get('/history/', historyController.index)
router.get('/history/new' , historyController.new )
router.get('history/:historyId', historyController.show)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
