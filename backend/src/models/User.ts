import { Model, DataTypes } from "sequelize";
import { sequelize } from '../database/db';

export class User extends Model{
    public id!: number;
    public name!: string;
    public email: string;
    public password: string;
    public isConnected: boolean;
    public token: string;
    public country: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING(128),
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING(128),
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING(128),
        allowNull:false,
    },
    isConnected:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
    },
    token:{
        type:DataTypes.STRING(128),
        allowNull:false,
    },
    country:{
        type:DataTypes.STRING(128),
        allowNull:false,
    }
},
{
    tableName:"users",
    sequelize:sequelize
})

User.sync();
