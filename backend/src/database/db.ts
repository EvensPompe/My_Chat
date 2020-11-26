import { Sequelize } from "sequelize";
import { config } from 'dotenv';

config();
let dbName:any,
    dbUser:any = process.env.DB_USER,
    dbPass:any = process.env.DB_PASSWORD;

switch(process.env.NODE_ENV){
    case "dev": dbName = process.env.DB_NAME_DEV
    break;
    case "test": dbName = process.env.DB_NAME_TEST
    break;
    default : dbName = process.env.DB_NAME;
}

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