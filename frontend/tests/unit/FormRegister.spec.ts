import { shallowMount } from "@vue/test-utils";
import FormRegister from '@/components/RegisterComponents/FormRegister.vue';

describe('FormRegister.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(FormRegister);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render FormRegister component',()=>{
        expect(wrapper.attributes('id')).toBe('formRegister');
    })

    it('should submit a user',async ()=>{
        const mockRegister = jest.fn();
        let user = {
            name:"UserName",
            email:"username@gmail.com",
            password:"testuserpass",
            confPassword:"testuserpass",
            country:"France"
        };

        wrapper.vm.register = mockRegister;
        await wrapper.find("#userName").setValue(user.name);
        await wrapper.find("#email").setValue(user.email);
        await wrapper.find("#password").setValue(user.password);
        await wrapper.find("#confPassword").setValue(user.confPassword);
        await wrapper.find("#country").setValue(user.country);

        await wrapper.find("#formRegister form section:last-child div:last-child button").trigger("submit");
        expect(mockRegister).toHaveBeenCalled();
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.registerData.name).toEqual(user.name);
        expect(wrapper.vm.registerData.email).toEqual(user.email);
        expect(wrapper.vm.registerData.password).toEqual(user.password);
        expect(wrapper.vm.registerData.confPassword).toEqual(user.confPassword);
        expect(wrapper.vm.registerData.country).toEqual(user.country);
    })
})