import { Router } from 'express'
import TaskController from 'api/v1/controllers/task_controller'

let router = Router()

router.post('/', TaskController.create.bind(TaskController))
router.get('/', TaskController.index.bind(TaskController))
router.get('/:id', TaskController.show.bind(TaskController))
router.put('/:id', TaskController.update.bind(TaskController))
router.delete('/:id', TaskController.destroy.bind(TaskController))

export default router