import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import FormLogin from '@/components/RegisterComponents/FormLogin.vue';

describe('Login.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(Login);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render Login view',()=>{
       expect(wrapper.attributes('id')).toBe('login');
    })

    it('should render FormLogin component',()=>{
        expect(wrapper.findComponent(FormLogin).exists()).toBeTruthy();
    })
})