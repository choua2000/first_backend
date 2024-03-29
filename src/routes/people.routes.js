const controller = require('../controllers/people');
module.exports = (app)=>{
    app.post('/createPeople', controller.createPeople)
}