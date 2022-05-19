import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://1566-177-97-88-21.sa.ngrok.io/'
})

Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*'