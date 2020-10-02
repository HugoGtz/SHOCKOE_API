import ApiController from './api_controller'

class UserController extends ApiController{
    create(req, res) {
        return res.json({status: true})
    }
}

export default new UserController()