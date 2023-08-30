const Router = require('express')
const router = new Router()
const adminContoller = require('../controllers/adminController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', adminContoller.registration)
router.post('/login', checkRole("admin"), adminContoller.login)
router.get('/auth',adminContoller.check)
router.delete('/:id $$ :role',checkRole("admin"), adminContoller.delete)

module.exports = router
