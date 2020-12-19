import Mailgen from 'mailgen';
import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';
import Message from "../interfaces/Message"

config();

export default class Mail{
    private _transporter: nodemailer.Transporter;
    constructor() {
      if(process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test"){
        this._transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: "sadye.goodwin13@ethereal.email",
            pass: "taEU1326Pa49Ux41G8"
          }
        });
      }else{
        this._transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
          }
        });
      }
    }
    sendMail(to: string, subject: string, message: Message) {
      var mailGenerator = new Mailgen({
        theme:'default',
        product:{
          name:"My_Chat",
          link:`http://localhost:${process.env.PORT}/`
        }
      });
      let mail = {
        body:{
          name:message.user,
          intro:message.title,
          action:{
            instructions:message.content,
            button:{
              color: '#22BC66',
              text:"Confirmer votre inscription",
              link:message.link
            }
          },
          outro:message.end
        }
      }
      var mailGenerated = mailGenerator.generate(mail);
      let options = {
        from: process.env.MAIL,
        to: to,
        subject: subject,
        html: mailGenerated
      }
  
      // verify connection configuration
      this._transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          // console.log('Server is ready to take our messages');
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
