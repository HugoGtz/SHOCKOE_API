import _ from 'lodash'
import { sequelize } from 'models'
import { Op } from 'sequelize'

export let filter = (fn, keysToCreate, params, querySearch) => {
    if (!_.isEmpty(params)) {
        let keys = Object.keys(params)
        let query = keysToCreate.forEach((key) => {
            if (keys.includes(key)) {
                querySearch = filterFunctions[fn](key, params, querySearch)
            }
        })
    }
    return querySearch
}

let filterFunctions = {
    like: (key, params, querySearch = {}) => {
        querySearch[key] = {
            [Op.like]: `%${params[key]}%`
        }
        return querySearch
    },
    date: (key, params, querySearch = {}) => {
        let with_date = sequelize.where(
            sequelize.fn('date', sequelize.col(key)),
            '=', params[key]
        )
        querySearch[key] = with_date
        return querySearch
    },
    is: (key, params, querySearch = {}) => {
        querySearch[key] = {
            [Op.is]: params[key]
        }
        return querySearch
    }
}