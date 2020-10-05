import _ from 'lodash'
import { sequelize } from 'models'
import { Op } from 'sequelize'


export let like = (keysToCreate, params, querySearch = {}) => {
    if (!_.isEmpty(params)) {
        let keys = Object.keys(params)
        let query = keysToCreate.forEach((key) => {
            if (keys.includes(key)) {
                querySearch[key] = {
                    [Op.like]: `%${params[key]}%`
                }
            }
        })
    }
    return querySearch
}

export let date = (keysToCreate, params, querySearch = {}) => {
    if (!_.isEmpty(params)) {
        let keys = Object.keys(params)
        let query = keysToCreate.forEach((key) => {
            if (keys.includes('due_date')) {
                let with_date = sequelize.where(
                    sequelize.fn('date', sequelize.col(key)),
                    '=', params[key])
                querySearch[key] = with_date
            }
        })
    }
    return querySearch
}