import { filter } from 'helpers/query_builder'

let queryParams = (params) => {
    let queryParams = filter('like', ['name', 'description'], params)
    queryParams = filter('date', ['due_date', 'createdAt', 'updatedAt'], params, queryParams)
    return  filter('is', ['complated'], params, queryParams)
}

export default queryParams