const {Quiz} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db')
class QuizContoller {
    async create(req, res) {
        const {subject, topic, value, answel} = req.body
        const quiz = await Quiz.create({subject, topic, value, answel})
        return res.json(quiz)
    }
    async getAll(req, res) {
        const quizes = await Quiz.findAll()
        return res.json(quizes)
    }

    async delete(req, res) {
        const id = req.params.id
        const quizes = await Quiz.destroy({where: {id: [id]}}, [id])
        res.json("successfully!")
    }


} 

module.exports = new QuizContoller()