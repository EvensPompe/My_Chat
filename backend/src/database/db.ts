import { Sequelize } from "sequelize";
import { config } from 'dotenv';

config();
let dbName:any = process.env.DB_NAME,
    dbUser:any = process.env.DB_USER,
    dbPass:any = process.env.DB_PASSWORD;

export const sequelize = new Sequelize(dbName,dbUser,dbPass,{
    host:"localhost",
    dialect:"mysql",
    port:3306,
    pool:{
        max: 5,
        min: 0,
        acquire: 10000,
        idle: 10000
    }
}) 