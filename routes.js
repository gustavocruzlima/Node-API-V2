// Initialize express router
let router = require('express').Router();// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to REST API PI VIII - Version 2',
    });
});

var machineController = require('./Controllers/machineController');

//machine 
router.route('/machine')
    .get(machineController.index)
    .post(machineController.new);
    
router.route('/machine/:machine_id')
    .get(machineController.view)
    .patch(machineController.update)
    .put(machineController.update)
    .delete(machineController.delete);

module.exports = router;

