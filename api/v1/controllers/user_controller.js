import ApiController from './api_controller'
import functionHandler from 'helpers/function_handler'
import { User } from 'models'


class UserController extends ApiController {
    constructor() {
        super()
    }

    @functionHandler()
    create(req, res) {
        User.create(this.userParams).then((user) => {
            return this.res_success(user)
        }).catch((err) => {
            return this.res_fail(String(err))
        })
    }

    get userParams() {
        let params = ['name', 'username', 'password']
        return this.params_permit(params)
    }
}

export default new UserController()