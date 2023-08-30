const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Admin = sequelize.define('admin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING,},
    last_name: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING, defaultValue: "admin"},
    password: {type: DataTypes.INTEGER,},
    imgFace: {type: DataTypes.STRING, unique: true},
    openGame: {type: DataTypes.STRING,},
    email: {type:DataTypes.TEXT, unique: true}
})
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING,},
    last_name: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING, defaultValue: "user"},
    imgFace: {type: DataTypes.STRING},
    email: {type:DataTypes.STRING, unique: true},
    password: {type:DataTypes.TEXT}
})

const IndividualTask = sequelize.define('individualTask' , {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    subject: {type: DataTypes.STRING,},
    topic: {type: DataTypes.STRING,},
    value: {type: DataTypes.TEXT,},
})

const Quiz = sequelize.define('quiz' , {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    subject: {type: DataTypes.STRING,},
    topic: {type: DataTypes.STRING,},
    value: {type: DataTypes.TEXT,},
    answel: {type: DataTypes.TEXT,}
})

Admin.hasMany(User)
User.belongsTo(Admin)


Admin.hasMany(IndividualTask)
IndividualTask.belongsTo(Admin)

Admin.hasMany(Quiz)
Quiz.belongsTo(Admin)

User.hasMany(Quiz)
Quiz.belongsTo(User)

User.hasMany(IndividualTask)
IndividualTask.belongsTo(User)


module.exports = {
    Admin,
    User,
    Quiz,
    IndividualTask,
}