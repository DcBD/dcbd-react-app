import { Sequelize, Dialect } from 'sequelize';

const DB_CONFIG = {
  host: String(process.env.DB_HOST),
  database: String(process.env.DB_NAME),

  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
}


const db = new Sequelize(DB_CONFIG.database, DB_CONFIG.username, DB_CONFIG.password, {
  host: DB_CONFIG.host,
  dialect: 'mysql',
});



export default db;