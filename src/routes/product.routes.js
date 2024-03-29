const controller = require('../controllers/product.controller')
module.exports = (app) =>{
    app.post('/createProduct', controller.createProdcut)
    app.get('/getAll', controller.select)
    app.get('/getProduct/:id', controller.get_one_product)
    app.put('/updated/:id', controller.update)
    app.delete('/deleted/:id', controller.delete)
}