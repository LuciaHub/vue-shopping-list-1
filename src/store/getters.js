export const getters = {
    requestsActive(state){
        return state.requests > 0;
    }
}