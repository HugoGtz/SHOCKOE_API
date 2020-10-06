import ApiController from './api_controller'
import functionHandler from 'helpers/function_handler'
import { Task } from 'models'
import queryParams from './mixins/task_query'

class TaskController extends ApiController {
    constructor() {
        super()
    }

    @functionHandler()
    index(req, res) {
        Task.findAll({
            where: queryParams(this.taskParams()),
            order: [
                ['due_date', 'DESC']
            ],
        }).then((tasks) => {
            return this.resSuccess(tasks)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    show(req, res) {
        Task.findByPk(this.id).then((task) => {
            return this.resSuccess(task)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    create(req, res) {
        Task.create(this.taskParams()).then((task) => {
            return this.resSuccess(task)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    update(req, res) {
        Task.findByPk(this.id).then((task) => {
            return task.update(this.taskParams(['completed', 'userId']))
        }).then((task) => {
            return this.resSuccess(task)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    @functionHandler()
    destroy(req, res) {
        Task.findByPk(this.id).then((task) => {
            return task.destroy()
        }).then((task) => {
            return this.resSuccess(task)
        }).catch((err) => {
            return this.resFail(String(err))
        })
    }

    taskParams(addParams=[]) {
        let params = ['name', 'due_date', 'description']
        return this.paramsPermit(params.concat(addParams))
    }
}

export default new TaskController()