import {shallowMount} from "@vue/test-utils";
import Contact from "@/views/Contact.vue";
describe('Contact.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(Contact);
    })
    afterEach(()=>{
        wrapper = null;
    })
    it('should render "Contact" views',()=>{
        expect(wrapper.attributes("id")).toBe("contact")
    })
    it('should submit and call sendContact',async ()=>{
        const mockSendContact = jest.fn();

        wrapper.vm.sendContact = mockSendContact;
        await wrapper.find("#email").setValue("email.test@gmail.com");
        await wrapper.find("#message").setValue("lorem ispum is");

        await wrapper.find('#contact form section:last-child div:last-child button').trigger("submit");
        expect(mockSendContact).toHaveBeenCalled();
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.contactData.email).toEqual("email.test@gmail.com");
        expect(wrapper.vm.contactData.message).toEqual("lorem ispum is");
    })
})
