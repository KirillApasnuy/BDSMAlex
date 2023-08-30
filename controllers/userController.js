const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User} = require('../models/models')
const jwt = require('jsonwebtoken')
const {where} = require("sequelize");

const generateJwt = (id, first_name, last_name, email, role, imgFace, password) => {
    return jwt.sign(
        {id, first_name, last_name, email, role, imgFace, password},
        process.env.SECRET_KEY,
        {expiresIn: '24h'})
}
class UserController {
    async registration(req, res, next) {
        const {first_name, last_name, role, imgFace, email, password} = req.body
        if (!first_name || !last_name || !imgFace || !email || !password) {
            return next(ApiError.badRequest('Что-то не корректно указано или не указано вовсе'))
        }
        const condidate = await User.findOne({where: {email}})
        if (condidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const user = await User.create({first_name, last_name, role, imgFace, email, password})
        const token = generateJwt( user.id, user.first_name , user.last_name, user.email, user.role, user.imgFace)
        return res.json({token})
    }


    async login(req, res, next) {
        const{first_name, last_name} = req.body
        const user = await User.findOne({where: {first_name}} && {where: {last_name}})
        if (!user) {
            return next(ApiError.internal('пользователь не найден'))
        }
        const token = generateJwt(user.id, user.first_name, user.last_name, user.email, user.role, user.imgFace, user.password)
        return res.json({token})

    }

    async check(req, res, next) {
        const{first_name, last_name} = req.body
        const user = await User.findOne({where: {first_name}} && {where: {last_name}})
        const token = generateJwt(user.id, user.first_name, user.last_name, user.email, user.role, user.imgFace)
        return res.json({token})
    }

    async delete(req, res) {
        const id = req.params.id
        const {role} = req.body
        const user = await User.destroy({where:{id}} && {where: 'schoolboy'}, [id] )
        return res.json({message: 'succeefull!'})
    }
} 

module.exports = new UserController()