export const MUTATION_TYPES = {
    SET_ITEMS: 'SET_ITEMS'
}

export const mutations = {
    [MUTATION_TYPES.SET_ITEMS](state, items){
        state.items = items;
    }
};