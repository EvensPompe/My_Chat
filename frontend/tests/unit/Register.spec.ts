import { shallowMount } from '@vue/test-utils';
import Register from '@/views/Register.vue';
import FormRegister from "@/components/RegisterComponents/FormRegister.vue";

describe('Register.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(Register);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render Register view',()=>{
       expect(wrapper.attributes('id')).toBe('register');
    })
    it('should render FormRegister component',()=>{
        expect(wrapper.findComponent(FormRegister).exists()).toBeTruthy();
    })
})