import sinon from 'sinon';
import { actions, ACTION_TYPES } from './actions';
import {MUTATION_TYPES} from './mutations';

describe('Actions', () => {
    describe(ACTION_TYPES.GET_ITEMS, () => {
        it('should get the items and send them to the mutation', async () => {
            // 1. No podemos hacer las peticiones HTTP
            // 2. No podemos probar el funcionamiento del httpService
            // 3. No podemos probar el funcionamiento de la mutación

            // Puedo probar que invoco a la mutacion adecuada con los datos adecuados
            // https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js
            
            // 1. Spies -> falsear una funcion y saber cuantas veces y con que argumentos se invoca
            // 2. Stubs -> similar al spy pero ademas permite especificar los valores de vuelta en funcion de los argumentos
            const expectedData = {};
            const expectedArguments = [MUTATION_TYPES.SET_ITEMS, expectedData];
            const commit = sinon.spy();
            const http = {
                getAll() { return {data:expectedData} }
            };

            await actions[ACTION_TYPES.GET_ITEMS]({commit}, http);

            expect(commit.calledWith(...expectedArguments)).toBe(true);
        });
    })
})