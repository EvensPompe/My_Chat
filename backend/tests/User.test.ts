import faker from 'faker';
import request from 'supertest';
import app from "../src/server";
import { User } from "../src/models/User";
import { config } from 'dotenv';
config();

let pass = faker.internet.password();
let userEmail = faker.internet.email();

describe('Post /user', () => {
    let user:any;

    beforeEach(async ()=>{
        user = await User.findAll({
            limit:1,
            order:[["createdAt","DESC"]]
        });
    })

    afterEach(async ()=>{
        user = null;
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
        .expect({message:"Le compte a été créé avec succès !"})
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
         .expect({message:"Vous êtes connecté !"})
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
         .expect(400)
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
         .expect(400)
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
         .put(`/user/${4}/modify`)
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
         .put(`/user/${4}/modify`)
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

describe('Get /', () => {    
    it('should get /',async ()=>{
        await request(app)
        .get("/")
        .expect(200)
        .expect("home")
    })
})