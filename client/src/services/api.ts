import axios from "axios";
import {config} from '../../config/config';

export const Api = axios.create({
    baseURL: config.apiURI
})

Api.defaults.headers.post['Accept'] = 'http://localhost:3004'