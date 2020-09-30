import { shallowMount,mount } from '@vue/test-utils';
import MChat from '@/components/MChat.vue';

describe('MChat.vue', () => {
    let wrapper: any;
    beforeEach(()=>{
        wrapper = shallowMount(MChat);
    })

    afterEach(()=>{
        wrapper = null;
    })
    it("should render MChat component",()=>{
       expect(wrapper.attributes('id')).toEqual("mChat");
    })
})
