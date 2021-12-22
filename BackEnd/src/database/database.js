import Sequelize from 'sequelize'



export const db = new Sequelize (
    'postgres',
    'postgres',
    '42929163',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

//>>> Settings Sequelize with data base
// export const db = new Sequelize('postgres://postgres:42929163@localhost:5432/postgres', {
//   logging: false,
// });

