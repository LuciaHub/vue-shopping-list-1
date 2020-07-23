import { MUTATION_TYPES, mutations } from './mutations';

describe('Mutations', () => {
    describe(MUTATION_TYPES.SET_ITEMS, () => {
        it('Should set state items', () => {
            const expectedItems = [1,2,3];
            const state = { items: []}

            mutations[MUTATION_TYPES.SET_ITEMS](state, expectedItems);
            
            expect(state.items).toEqual(expectedItems)
        })
    })
})