import { shallowMount } from '@vue/test-utils';
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

    it('should props widthsend value to false',async ()=>{
        const widthsend:boolean = false;
        await wrapper.setProps({widthsend})
        expect(wrapper.props('widthsend')).toBeFalsy();
    })

    it('should props widthsend value to false',async ()=>{
        const widthsend:boolean = false;
        await wrapper.setProps({widthsend})
        expect(wrapper.props('widthsend')).toBeFalsy();
    })
})
