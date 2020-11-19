import Mail from "../middlewares/Mail";
import { mocked } from 'ts-jest/utils';
import faker from 'faker';

let mockSendMail = jest.fn()
jest.mock("../middlewares/Mail",()=>{
   return jest.fn().mockImplementation(()=>{
       return {sendMail:mockSendMail}
    })
})

describe('Test middleware Mail', () => {
    it("should send a new mail",()=>{
        let mail = new Mail();
        mail.sendMail(faker.internet.email(),faker.internet.userName(),faker.internet.exampleEmail())
        expect(mocked(mail.sendMail).mock.calls).toHaveLength(1);
    })
})
