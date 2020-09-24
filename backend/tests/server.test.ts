import faker from 'faker';
import request from 'supertest';
import express from 'express';

var app: express.Application = express();

describe('Get /user', () => {
    it("should get /user", () => {
        const res = request(app)
            .get('/user')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect("Home")
    })
})
