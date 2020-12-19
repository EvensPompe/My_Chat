import Mail from "../middlewares/Mail";
import { mocked } from 'ts-jest/utils';
import faker from 'faker';
import Message from "../interfaces/Message";
import Mailgen from "mailgen";

let mockSendMail = jest.fn();
let mockGenerate = jest.fn();
jest.mock("../middlewares/Mail",()=>{
   return jest.fn().mockImplementation(()=>{
       return {sendMail:mockSendMail}
    })
})

describe('Test middleware Mail', () => {
    it("should send a new mail",()=>{
        let mail = new Mail();
        let fakeName:string = faker.name.firstName();
        let message:Message = {
            title:"Bienvenue à My_Chat !",
            content:`Hello ${fakeName},
            votre nouveau compte a été créé avec succès !
            Pour confirmer l'inscription, cliquez sur le lien ci-dessous :`,
            link:`http://localhost:${process.env.PORT}/user/confirmation?&jwt=${faker.internet.password()}`,
            user:fakeName,
            end:`Attention: Vous avez dix minutes pour confirmer votre compte. Si vous n'êtes pas à l'origine, ignorer le message !
           À très bientôt !`
        }
        mail.sendMail(faker.internet.email(),faker.internet.userName(),message)
        expect(mocked(mail.sendMail).mock.calls).toHaveLength(1);
    })
})
