const Test = require('../controllers/test')
module.exports = (app) =>{
    app.post('/create', Test.createTest)
}
// const express = require('express');
// const controller = require('../controllers/test')
// const router = express.Router();

// router.post('/created' ,controller.createTest);


// module.exports = router;