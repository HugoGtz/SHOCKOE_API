import { Router } from 'express'
import UserController from 'api/v1/controllers/user_controller'

let router = Router()

router.get('/:id/tasks', UserController.tasks.bind(UserController))
router.post('/', UserController.create.bind(UserController))
router.get('/:id', UserController.show.bind(UserController))
router.get('/', UserController.index.bind(UserController))
router.put('/:id', UserController.update.bind(UserController))
router.delete('/:id', UserController.destroy.bind(UserController))


export default router