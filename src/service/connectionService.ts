import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize('prod', 'root', 'root', {
    dialect: 'mysql',
    dialectOptions: {
        host: 'localhost',
        port: 3306,
    }
})

export default sequelize;