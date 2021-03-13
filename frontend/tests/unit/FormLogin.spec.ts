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

    it('should submit a user and call "Login" function',async()=>{
        const mockLogin = jest.fn();
        let user = {
            email:"username@gmail.com",
            password:"testuserpass"
        };

        wrapper.vm.login = mockLogin;
        await wrapper.find("#email").setValue(user.email);
        await wrapper.find("#password").setValue(user.password);

        await wrapper.find("#formLogin form section:last-child div:last-child button").trigger("submit");
        expect(mockLogin).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.loginData.email).toEqual(user.email);
        expect(wrapper.vm.loginData.password).toEqual(user.password);
    })
})
