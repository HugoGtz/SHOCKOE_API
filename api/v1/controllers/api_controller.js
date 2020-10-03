export default class ApiController {
    constructor(){
    }

    params_permit(req, params) {
        return req.parameters.permit(params).value()
    }

    res_success(res, data, statusCode=200) {
        return res.status(statusCode).json(data)
    }

    res_fail(res, err, statusCode=500) {
        return res.status(statusCode).json({err: err})
    }
}