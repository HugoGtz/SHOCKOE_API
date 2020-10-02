import { Router } from 'express'
import TaskController from 'api/v1/controllers/task_controller'

let router = Router()

router.get('/', TaskController.create)

export default router