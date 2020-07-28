export const MUTATION_TYPES = {
    SET_ITEMS: 'SET_ITEMS',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
    CHANGE_REQUESTS: 'CHANGE_REQUESTS',
    SET_ERROR_GETTING_ITEMS: 'SET_ERROR_GETTING_ITEMS'
}

export const mutations = {
    [MUTATION_TYPES.SET_ITEMS](state, items) {
        state.items = items;
    },
    [MUTATION_TYPES.ADD_ITEM](state, item) {
        state.items.push(item);
    },
    [MUTATION_TYPES.REMOVE_ITEM](state, id) {
        const index = state.items.findIndex((item) => item.id == id);
        if (index !== -1) {
            state.items.splice(index, 1);
        }
    },
    [MUTATION_TYPES.UPDATE_ITEM](state, { id, model }) {
        const item = state.items.find((item) => item.id == id);
        if (!item) {
            return;
        }
        for(let [key, value] of Object.entries(model)){
            item[key] = value;
        }
    },
    [MUTATION_TYPES.CHANGE_REQUESTS](state, diff){
        state.requests += diff;
    },
    [MUTATION_TYPES.SET_ERROR_GETTING_ITEMS](state, value){
        state.errorGettingItems = value;
    }
};