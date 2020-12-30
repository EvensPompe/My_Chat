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
        let user = {
            name:"",
            email:"",
            password:"",
            confPassword:"",
            country:""
        }

        await wrapper.find("#userName").setValue(user.name)
        await wrapper.find("#email").setValue(user.email)
        await wrapper.find("#password").setValue(user.password)
        await wrapper.find("#confPassword").setValue(user.confPassword)
        await wrapper.find("#country").setValue(user.country)

        await wrapper.find("form").trigger("submit.prevent")
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.userName).toEqual(user.name)
        expect(wrapper.vm.email).toEqual(user.email)
        expect(wrapper.vm.password).toEqual(user.password)
        expect(wrapper.vm.confPassword).toEqual(user.confPassword)
        expect(wrapper.vm.country).toEqual(user.country)
    })
})