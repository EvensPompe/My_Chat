import { shallowMount } from '@vue/test-utils';
import About from "@/views/About.vue";

describe('About.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(About);
    })
    afterEach(()=>{
        wrapper = null;
    })
    it('should render "About" views',()=>{
        expect(wrapper.attributes('id')).toBe('about');
    })
})
