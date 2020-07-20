import {MUTATION_TYPES} from './mutations';
export const ACTION_TYPES = {
    GET_ITEMS: 'GET_ITEMS'
};

export const actions = {
    async [ACTION_TYPES.GET_ITEMS](context, http){
        const {data} = await http.getAll();
        context.commit(MUTATION_TYPES.SET_ITEMS, data);
    }
}