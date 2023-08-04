import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://baza-gai.com.ua/',
    headers: { "Accept": "application/json", "X-Api-Key": 83b6fc58e4480c83320c21cca5337e55},
    'Access-Control-Allow-Origin': '*'
})

export const getCarAPI = {
    byNumber(number) {
        return instance.get(`nomer/${number}`)
    },
    byMake(make) {
        return instance.get(`make/${make}`)
    },
    byModel(make, model) {
        return instance.get(`make/${make}/${model}`)
    }
}
