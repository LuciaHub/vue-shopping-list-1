import {MUTATION_TYPES} from './mutations';
export const ACTION_TYPES = {
    ADD_REQUEST: 'ADD_REQUEST',
    SUB_REQUEST: 'SUB_REQUEST',
    GET_ITEMS: 'GET_ITEMS',
    UPDATE_ITEM: 'UPDATE_ITEM',
    CREATE_ITEM: 'CREATE_ITEM'
};

export const actions = {
    [ACTION_TYPES.ADD_REQUEST]({commit}){
        commit(MUTATION_TYPES.CHANGE_REQUESTS, 1);
    },
    [ACTION_TYPES.SUB_REQUEST]({commit}){
        commit(MUTATION_TYPES.CHANGE_REQUESTS, -1);
    },
    async [ACTION_TYPES.GET_ITEMS]({commit}, itemsService){
        try {
            const response = await itemsService.getAll();
            commit(MUTATION_TYPES.SET_ITEMS, response.data);
            commit(MUTATION_TYPES.SET_ERROR_GETTING_ITEMS, false);
        } catch (err) {
            commit(MUTATION_TYPES.SET_ERROR_GETTING_ITEMS, err);
        }
    },
    async [ACTION_TYPES.UPDATE_ITEM]({commit}, {id, model, itemsService}){
        const response = await itemsService.patch(id, model);
        commit(MUTATION_TYPES.UPDATE_ITEM, {id, model: response.data});
    },
    async [ACTION_TYPES.CREATE_ITEM]({commit}, {model, itemsService}){
        const response = await itemsService.post(model);
        commit(MUTATION_TYPES.ADD_ITEM, response.data);
    }
}