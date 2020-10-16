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
})