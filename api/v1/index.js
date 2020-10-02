import express from 'express'
import UserRoute from './router/user_router'
import TaskRoute from './router/task_router'

let app = express()

app.use('/users', UserRoute)
app.use('/tasks', TaskRoute)

export default app