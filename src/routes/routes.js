const express = require('express');
const router = express.Router();
const userRoute = require('./user.routes')
const testRoute = require('./test.routes')
const productRoute = require('./product.routes')
const peopleRoute = require('./people.routes')
const personRoute = require('./person.routes')
userRoute(router);
testRoute(router);
productRoute(router);
peopleRoute(router)
personRoute(router)
module.exports = router;