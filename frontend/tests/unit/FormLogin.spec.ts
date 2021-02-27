import { shallowMount } from "@vue/test-utils";
import FormLogin from "@/components/FormComponents/FormLogin.vue";

describe('FormLogin.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(FormLogin);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render FormLogin component',()=>{
        expect(wrapper.attributes('id')).toBe("formLogin")
    })
})
