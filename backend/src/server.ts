import "reflect-metadata";
import { createConnection } from "typeorm";
import express from 'express';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { userRouter } from './routes/user';
import cors from 'cors';

dotenv.config();

var app = express();
var port = process.env.PORT || 3000;
createConnection().then(async connection => {
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/user", userRouter);
    app.listen(port, () => {
        console.log(`Serveur sur le port ${port}`)
    })
}).catch(err => {
    console.log(`TypeOrm connection error : ${err}`)
});