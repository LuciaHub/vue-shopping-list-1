import axios from 'axios';
import { HTTPService } from '../core/http-service';
import { store } from '../store/store';
import { ACTION_TYPES } from '../store/actions';

const httpClient = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}/items`,
});

httpClient.interceptors.request.use((config) => {
    store.dispatch(ACTION_TYPES.ADD_REQUEST);
    return config;
});

httpClient.interceptors.response.use((response) => {
    store.dispatch(ACTION_TYPES.SUB_REQUEST);
    return response;
}, (error) => {
    store.dispatch(ACTION_TYPES.SUB_REQUEST);
    return Promise.reject(error);
});

export const itemsService = new HTTPService(httpClient);