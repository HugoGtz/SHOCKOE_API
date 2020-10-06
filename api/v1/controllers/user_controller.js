import ApiController from './api_controller'
import functionHandler from 'helpers/function_handler'
import { User, Task } from 'models'
import queryParams from './mixins/task_query'

class UserController extends ApiController {
    constructor() {
        super()
    }

    @functionHandler()
    index(req, res) {
        User.findAll().then((users) => {
            return this.resSuccess(users)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    show(req, res) {
        User.findByPk(this.id).then((user) => {
            return this.resSuccess(user)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    create(req, res) {
        User.create(this.userParams).then((user) => {
            return this.resSuccess(user)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    update(req, res) {
        User.findByPk(this.id).then((user) => {
            return user.update(this.userParams)
        }).then((user) => {
            return this.resSuccess(user)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    destroy(req, res) {
        User.findByPk(this.id).then((user) => {
            return user.destroy()
        }).then((user) => {
            return this.resSuccess(user)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    tasks(req, res) {
        Task.findAll({
                where: queryParams(this.taskParams()),
                order: [
                    ['due_date', 'DESC']
                ]
            })
            .then((userTasks) => {
                return this.resSuccess(userTasks)
            })
            .catch((err) => {
                return this.resFail(String(err))
            })
    }

    get userParams() {
        let params = ['name', 'username', 'password']
        return this.paramsPermit(params)
    }

    taskParams(addParams=[]) {
        let params = ['name', 'due_date', 'description']
        return this.paramsPermit(params.concat(addParams))
    }
}

export default new UserController()