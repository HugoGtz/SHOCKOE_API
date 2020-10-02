import ApiController from './api_controller'

class TaskController extends ApiController{
    create(req, res) {
        return res.json({status: true})
    }
}

export default new TaskController()