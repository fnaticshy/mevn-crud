import axios from 'axios'

// экспортируем с базовым адресом запроса по-умолчанию
export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081'
    })
}