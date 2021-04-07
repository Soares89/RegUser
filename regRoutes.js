//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API a Funcionar',
        message: 'Bem vindo à API Registo'
    });
});

//Import Reg Controller
var regController = require('./regController');

// Reg routes
router.route('/reg')
    .get(regController.index)
    .post(regController.add);


router.route('/reg/:reg_id')
    .get(regController.view)
    .patch(regController.update)
    .put(regController.update)
    .delete(regController.delete);

//Export API routes
module.exports = router;