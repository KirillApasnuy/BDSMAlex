const Router = require('express')
const router = new Router()
const quizContoller = require('../controllers/quizController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole("admin" || "teacher"), quizContoller.create)
router.get('/', quizContoller.getAll)
router.delete('/:id', checkRole("admin" || "teacher"), quizContoller.delete)


module.exports = router