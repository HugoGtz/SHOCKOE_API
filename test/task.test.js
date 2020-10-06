import chai from 'chai'
import fs from 'fs'
import { request, app } from './test_core'
import { taskSchema, tasksSchema } from './schemas/task'

const { expect } = chai;

describe('Tasks', () => {
    let task = {}
    it('Create Task without user', (done) => {
        let createTaskData = {
            name: 'task name',
            description: 'task description',
            due_date: Date.now()
        }
        request(app).post('/api/v1/tasks')
            .send(createTaskData)
            .end(async(err, res) => {
                task = await res.body
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(taskSchema)
                done()
            })
    })

    it('Retrieves Tasks without params', (done) => {
        request(app).get('/api/v1/tasks')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(tasksSchema)
                done()
            })
    })

    it('Retrieve Task', (done) => {
        request(app).get(`/api/v1/tasks/${task.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(taskSchema)
                done()
            })
    })

    it('Update Task', (done) => {
        let updateTaskData = {
            name: 'updated task name',
            description: 'updated task description',
            completed: true
        }
        request(app).put(`/api/v1/tasks/${task.id}`)
            .send(updateTaskData)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(taskSchema)
                done()
            })
    })

    it('Retrieves Tasks with params', (done) => {
        request(app).get('/api/v1/tasks')
            .send({name: "task", due_date: '2020/10/05', description: 'task', completed: true})
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(tasksSchema)
                done()
            })
    })


    it('Destroy Task', (done) => {
        request(app).delete(`/api/v1/tasks/${task.id}`)
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body).to.be.jsonSchema(taskSchema)
                done()
            })
    })
})