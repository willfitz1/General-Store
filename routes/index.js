const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/api', (req, res) => res.send('This is root!'))

router.get('/items', controllers.getAllItems)

router.get('/items/:id', controllers.getItemById)

router.post('/items', controllers.createItem)

router.put('/items/:id', controllers.updateItem)

router.delete('/items/:id', controllers.deleteItem)

router.post('/reviews', controllers.createReview)

module.exports = router
