import { shallowMount } from '@vue/test-utils'
import App from './App';

describe('App component', ()=>{
    const app = shallowMount(App);
    it('should print "Hello" in the title', () =>{
        const h1 = app.find('h1');
        expect(h1).toBeDefined();
        expect(h1.text()).toBe('Hello');
    });
    it('should print v-main', ()=>{
        const main = app.findComponent({name: 'v-main'});
        expect(main.exists()).toBe(true);
    });
});