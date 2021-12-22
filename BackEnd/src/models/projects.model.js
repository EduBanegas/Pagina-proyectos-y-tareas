import Sequelize from 'sequelize'
import {db} from '../database/database' 
import tasksModel from './tasks.model'

const projectsModel = db.define('projects', 
{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliveryDate: {
        type: Sequelize.DATE
    }
}, 
{
    timestamps: false
})


projectsModel.hasMany(tasksModel, {foreingKey: 'projectId', sourceKey: 'id'})
tasksModel.belongsTo(projectsModel,{foreingKey: 'projectId', sourceKey: 'id'})


export default projectsModel;