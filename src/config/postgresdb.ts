import { Sequelize } from 'sequelize'
import * as dotenv from "dotenv";
dotenv.config();
const sequelizeConnection = new Sequelize(process.env.POSTGRES_DB);

export default sequelizeConnection;