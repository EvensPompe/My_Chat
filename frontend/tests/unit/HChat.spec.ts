import { shallowMount } from '@vue/test-utils';
import Hchat from '@/components/HChat.vue';

describe('HChat.vue', () => {
    let wrapper: any;
    beforeEach(()=>{
       wrapper = shallowMount(Hchat);
    })

    afterEach(()=>{
        wrapper = null;
    })
    it('should render HChat component',()=>{
        expect(wrapper.attributes("id")).toEqual("hChat")
    })

    it('should render menu-chat component',()=>{
        expect(wrapper.findComponent({name:"menu-chat"}).exists()).toBe(true);
    })

})
