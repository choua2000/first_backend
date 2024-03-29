const controller = require('../controllers/person')
module.exports = (app) =>{
    app.post('/createPerson' , controller.createPerson);
    app.put('/updatePerson/:id' , controller.updatePerson);
    app.get('/getPerson_id/:id', controller.getPerson_id);
    app.get('/selectPerson', controller.selectPerson);
}