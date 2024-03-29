const controller = require('../controllers/user.controller');
module.exports = (app) => {
    app.post('/Signup', controller.Signup);
    app.post('/Signin', controller.Signin);
    app.put('/update/:id', controller.update)
};
// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/user.controller');
// router.post('/Signup',controller.Signup);

// module.exports = router;