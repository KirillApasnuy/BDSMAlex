const Router = require('express')
const router = new Router()
const models = require('../models/models')

const adminRouter = require('./adminRouter')
const individualTaskRouter = require('./individualTaskRouter')
const quizRouter = require('./quizRouter')
const userRouter = require('./userRouter')

router.use('/admin', adminRouter)
router.use('/individualTask', individualTaskRouter)
router.use('/quiz', quizRouter)
router.use('/user', userRouter)
module.exports = router
