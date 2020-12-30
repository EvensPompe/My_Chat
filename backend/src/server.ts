import express from 'express';
import * as bodyParser from 'body-parser';
import { config } from 'dotenv';
import user from './routes/user';
import cors from 'cors';

config();

var app = express();
var port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", user);

app.listen(port, () => {
    console.log(`Serveur sur le port ${port}`)
})

export default app;