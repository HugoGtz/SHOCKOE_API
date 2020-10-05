export default class ApiController {
    constructor() {
        this.req = null
        this.res = null
        this.params = null
    }
    
    get id() {
        return this.req.params.id
    }
    
    paramsPermit(params) {
        return this.req.parameters.permit(params).value()
    }

    resSuccess(data, statusCode = 200) {
        return this.__res(data, statusCode)
    }

    resFail(err, statusCode = 500) {
        return this.__res({
            err: err
        }, statusCode)
    }

    __res(json, statusCode) {
        this.res.status(statusCode).json(json)
    }
}