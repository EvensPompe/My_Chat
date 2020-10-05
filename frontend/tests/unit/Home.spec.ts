import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue'

describe('Home.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(Home);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render Home view',()=>{
       expect(wrapper.attributes('id')).toBe('home');
    })

})