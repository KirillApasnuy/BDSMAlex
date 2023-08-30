const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', checkRole("admin" || "teacher"), authMiddleware, UserController.check)
router.delete('/:id $$ :role', checkRole("admin"), UserController.delete)

module.exports = router
