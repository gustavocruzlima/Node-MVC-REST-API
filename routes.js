// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to REST API PI VIII',
    });
});

var machineOneController = require('./Controllers/machineOneController');
var machineTwoController = require('./Controllers/machineTwoController');
var machineThreeController = require('./Controllers/machineThreeController');

//machine One
router.route('/machineOne')
    .get(machineOneController.index)
    .post(machineOneController.new);
    
router.route('/machineOne/:machineone_id')
    .get(machineOneController.view)
    .patch(machineOneController.update)
    .put(machineOneController.update)
    .delete(machineOneController.delete);

//machine Two
router.route('/machineTwo')
    .get(machineTwoController.index)
    .post(machineTwoController.new);
    
router.route('/machineTwo/:machinetwo_id')
    .get(machineTwoController.view)
    .patch(machineTwoController.update)
    .put(machineTwoController.update)
    .delete(machineTwoController.delete);

//machine Three
router.route('/machineThree')
    .get(machineThreeController.index)
    .post(machineThreeController.new);
    
router.route('/machineThree/:machinethree_id')
    .get(machineThreeController.view)
    .patch(machineThreeController.update)
    .put(machineThreeController.update)
    .delete(machineThreeController.delete);


module.exports = router;

