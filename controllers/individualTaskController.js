const { IndividualTask } = require("../models/models")

class IndividualTaskContoller {
    async create(req, res) {
        const {subject, topic, value} = req.body
        const task = await IndividualTask.create({subject, topic, value})
        return res.json(task)
    }

    async delete(req, res) {
        const id = req.params.id
        const individualTask = await IndividualTask.destroy({where: {id: [id]}}, [id])
        res.json("successfully!")
    }

    async check(req, res) {
        const task = await IndividualTask.findAll()
        return res.json(task)
    }
} 

module.exports = new IndividualTaskContoller()