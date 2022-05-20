import axios from "axios";

let jwt = {}
const token = localStorage.getItem('u')
token ? jwt = JSON.parse(token) : null

export const Api = axios.create({
    baseURL: 'http://localhost:5000'
})

Api.defaults.headers.post['Accept'] = 'http://localhost:3000'
token ? Api.defaults.headers.post['Authorization'] = jwt.token : null