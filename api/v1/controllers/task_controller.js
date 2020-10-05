import ApiController from './api_controller'
import functionHandler from 'helpers/function_handler'
import { Task } from 'models'


class TaskController extends ApiController {
    constructor() {
        super()
    }

    @functionHandler()
    create(req, res) {
        Task.create(this.taskParams()).then((user) => {
            return this.resSuccess(user)
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