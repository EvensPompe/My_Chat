import faker from 'faker';
import request from 'supertest';
import app from "../server";
import { User } from "../models/User";
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

let pass = faker.internet.password();
let userEmail = faker.internet.email();

describe('Post /user', () => {
    let user:any;
    let signSpy:jest.SpyInstance;
    beforeEach(async ()=>{
        user = await User.findAll({
            limit:1,
            order:[["createdAt","DESC"]]
        });
        signSpy = await jest.spyOn(jwt,"sign")
    })

    afterEach(async ()=>{
        user = null;
        // jest.clearAllMocks();
        signSpy.mockRestore()
    })

    it('should register a new user',async ()=>{
       await request(app)
        .post('/user/new')
        .send({
            name:faker.name.findName(),
            email:userEmail,
            password:pass,
            confPassword:pass,
            country:faker.address.country()
        })
        .set('Accept','application/json')
        .expect("Content-Type", /json/)
        .expect(201)
        .expect({message:"Votre inscription a été pris en compte avec succès ! Un mail de confirmation a été envoyé à l'adresse mail " + userEmail})
        .then(res=>{
            expect(signSpy).toHaveBeenCalled();
        })
    })

    it('should not register a user with password error',async ()=>{
       await request(app)
        .post('/user/new')
        .send({
            name:faker.name.findName(),
            email:faker.internet.email(),
            password:faker.internet.password(),
            confPassword:faker.internet.password(),
            country:faker.address.country()
        })
        .set('Accept','application/json')
        .expect("Content-Type", /json/)
        .expect({error:"Le mot de passe est incorrecte !"})
        .then(res=>{
            expect(signSpy).not.toHaveBeenCalled();
        })
    })

    it('should not register a existant user',async ()=>{
        await request(app)
         .post('/user/new')
         .send({
             name:faker.name.findName(),
             email:userEmail,
             password:faker.internet.password(),
             confPassword:faker.internet.password(),
             country:faker.address.country()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect({error:"Le compte existe déjà !"})

     })

    it('should connect the user',async ()=>{
        await request(app)
         .post('/user/connexion')
         .send({
             email:user[0].email,
             password:pass,
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .then(res=>{
             expect(res["body"].hasOwnProperty("message")).toBeTruthy();
             expect(res["body"]["message"]).toEqual("Vous êtes connecté !");
             expect(res["body"].hasOwnProperty("token")).toBeTruthy();
         })
    })

    it('should not connect the user with wrong password',async ()=>{
        await request(app)
         .post('/user/connexion')
         .send({
             email:user[0].email,
             password:faker.internet.password(),
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
    })

    it('should not connect the user with wrong email',async ()=>{
        await request(app)
         .post('/user/connexion')
         .send({
             email:faker.internet.email(),
             password:faker.internet.password(),
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect({error:"Le nom d'utilisateur ou le mot de passe est invalide !"})
    })
})

describe('Put /user', () => {
    let user: any;

    beforeEach(async ()=>{
        user = await User.findAll({
            limit:1,
            order:[["createdAt","DESC"]]
        });
    })

    afterEach(async ()=>{
        user = null;
    })

    it('should modify name of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            name:faker.name.findName()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .expect({message:"Modification effectué avec succès !"})
    })

    it('should modify name and email of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            name:faker.name.findName(),
            email:faker.internet.email()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .expect({message:"Modification effectué avec succès !"})
    })

    it('should modify name and email of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            name:faker.name.findName(),
            email:faker.internet.email()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .expect({message:"Modification effectué avec succès !"})
    })

    it('should modify password of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            password:pass,
            newPassword:faker.internet.password(),
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .expect({message:"Modification effectué avec succès !"})
    })

    it('should not modify password of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            password:faker.internet.password(),
            newPassword:faker.internet.password(),
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(400)
         .expect({error:"Erreur liée à la modification !"})
    })

    it('should modify all fields of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            name:faker.name.findName(),
            email:faker.internet.email(), 
            password:pass,
            newPassword:faker.internet.password(),
            country:faker.address.country()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(200)
         .expect({message:"Modification effectué avec succès !"})
    })

    it('should not modify all fields of an user',async ()=>{
        await request(app)
         .put(`/user/${user[0].id}/modify`)
         .send({
            name:faker.name.findName(),
            email:faker.internet.email(), 
            password:faker.internet.password(),
            newPassword:faker.internet.password(),
            country:faker.address.country()
         })
         .set('Accept','application/json')
         .expect("Content-Type", /json/)
         .expect(400)
         .expect({error:"Erreur liée à la modification !"})
    })
})

describe('Get /user', () => { 
    let user: any;
    beforeEach(async ()=>{
        user = await User.findAll({
            limit:1,
            attributes:{
                exclude:['password']
            },
            order:[["createdAt","DESC"]]
        });
        jest.resetAllMocks()
    })

    afterEach(async ()=>{
        user = null;
    })

    it('should get all users',async ()=>{
        await request(app)
        .get("/user/all")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res)=>{
            expect(res["body"].length).not.toEqual(0);
        })
    })

    it('should get one user',async ()=>{
        await request(app)
        .get("/user/find/1")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res)=>{
            expect(res["body"].hasOwnProperty('token'));
            expect(res["body"]["token"]).toBeTruthy();
            expect(res["body"].hasOwnProperty('user'));
            expect(res["body"]["user"]).toBeTruthy();
        })
    })

    it('should get the lastest user',async ()=>{
        await request(app)
        .get("/user/last")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res)=>{
            expect(res["body"].hasOwnProperty('token')).toBeTruthy();
            expect(res["body"].hasOwnProperty('user')).toBeTruthy();
            expect(res["body"]["token"]).toBeTruthy();
            expect(res["body"]["user"]).toBeTruthy();
        })
    })
 
    it('should confirm the user',async ()=>{
        let testUser: object = {
            name:user[0].name,
            email:user[0].email,
            isConnected:user[0].isConnected,
            isAuth:user[0].isAuth,
            token:user[0].token,
            country:user[0].country
        };

        let testJwt = await jwt.sign(testUser,`${process.env.S_KEY}`,{ expiresIn: 600 });
        await request(app)
        .get("/user/confirm?&jwt="+testJwt)
        .expect(200)
        .then((res)=>{
            expect(res["body"].hasOwnProperty("message")).toBeTruthy()
            expect(res["body"]["message"]).toEqual("Votre compte a été confirmé avec succès !")
            expect(res["body"].hasOwnProperty("token")).toBeTruthy()
        })
    })

    it('should not confirm the user with a wrong token',async ()=>{
        let testUser: object = {
            name:user[0].name,
            email:user[0].email,
            isConnected:user[0].isConnected,
            isAuth:user[0].isAuth,
            token:user[0].token,
            country:user[0].country
        }
        let testJwt = await jwt.sign(testUser,"${process.env.S_KEY}",{ expiresIn: 600 });
        await request(app)
        .get("/user/confirm?&jwt="+testJwt)
        .expect(400)
        .expect({error:"Le lien a expiré ou est invalide !"})
    })

    it('should not confirm the user wich is already connected and auth',async ()=>{
        let testUser: object = {
            name:user[0].name,
            email:user[0].email,
            isConnected:true,
            isAuth:true,
            token:user[0].token,
            country:user[0].country
        }
        let testJwt = await jwt.sign(testUser,`${process.env.S_KEY}`,{ expiresIn: 600 });
        await request(app)
        .get("/user/confirm?&jwt="+testJwt)
        .expect(400)
        .expect({error:"L'utilisateur a déjà confirmé !"})
    })
})
