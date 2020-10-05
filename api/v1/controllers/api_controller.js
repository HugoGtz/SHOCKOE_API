export default class ApiController {
    constructor() {
        this.req = null
        this.res = null
        this.params = null
    }

    params_permit(params) {
        return this.req.parameters.permit(params).value()
    }

    res_success(data, statusCode = 200) {
        return this.__res(data, statusCode)
    }

    res_fail(err, statusCode = 500) {
        return this.__res({
            err: err
        }, statusCode)
    }

    __res(json, statusCode) {
        this.res.status(statusCode).json(json)
    }
}