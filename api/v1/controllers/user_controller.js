import ApiController from './api_controller'
import { User } from 'models'


class UserController extends ApiController {
    constructor() {
        super()
    }

    create(req, res) {
        try {
            let user_params = this.params_permit(req, this.user_params)
            User.create(user_params).then((user) => {
                return this.res_success(res, user)
            }).catch((err) => {
                return this.res_fail(res, String(err))
            })
        } catch (err) {
            return this.res_fail(res, String(err))
        }
    }

    get user_params() {
        return ['name', 'user_name', 'password']
    }
}

export default new UserController()