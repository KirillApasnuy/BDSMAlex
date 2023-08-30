const Router = require('express')
const router = new Router()
const individualTaskContoller = require('../controllers/individualTaskController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole("admin" || "teacher"), individualTaskContoller.create)
router.get('/', individualTaskContoller.check)
router.delete('/:id', checkRole("admin" || "teacher"), individualTaskContoller.delete)


module.exports = router