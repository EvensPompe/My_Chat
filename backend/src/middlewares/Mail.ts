import Mailgen from 'mailgen';
import * as nodemailer from 'nodemailer';
// import { config } from 'dotenv';

// config();

export default class Mail{
    private _transporter: nodemailer.Transporter;
    constructor() {
      this._transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: "sadye.goodwin13@ethereal.email",
          pass: "taEU1326Pa49Ux41G8"
        }
      });
    }
    sendMail(to: string, subject: string, content: string) {
      let options = {
        from: process.env.MAIL,
        to: to,
        subject: subject,
        text: content
      }
  
      // verify connection configuration
      this._transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log('Server is ready to take our messages');
        }
      });
  
      this._transporter.sendMail(
        options, (error, info) => {
          if (error) {
            return console.log(`${error}`);
          }
          // console.log(`Message Sent ${info.response}`);
        });
    }
}
