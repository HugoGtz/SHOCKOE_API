import { Router } from 'express'
import UserController from 'api/v1/controllers/user_controller'

let router = Router()

router.post('/', UserController.create.bind(UserController))


export default router