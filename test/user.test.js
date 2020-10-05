import chai from 'chai'
import fs from 'fs'
import { request, app } from './test_core'
import { userSchema, usersSchema } from './schemas/user'

const { expect } = chai;

describe('Users', () => {
    let user = {}
    it('Create User', (done) => {
        let createUserData = {
            name: 'name',
            username: 'user_test',
            password: "password_test"
        }
        request(app).post('/api/v1/users')
            .send(createUserData)
            .end(async(err, res) => {
                user = await res.body
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(userSchema)
                done()
            })
    })

    it('Retrieves Users', (done) => {
        request(app).get('/api/v1/users')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(usersSchema)
                done()
            })
    })

    it('Retrieve User', (done) => {
        request(app).get(`/api/v1/users/${user.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(userSchema)
                done()
            })
    })

    it('Update User', (done) => {
        let updateUserData = {
            name: 'Test update user',
            username: 'testUpdateUser',
            password: 'updatedPassword'
        }
        request(app).put(`/api/v1/users/${user.id}`)
            .send(updateUserData)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(userSchema)
                done()
            })
    })


    it('Destroy User', (done) => {
        request(app).delete(`/api/v1/users/${user.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(userSchema)
                done()
            })
    })
})