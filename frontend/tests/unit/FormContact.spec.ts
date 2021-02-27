import { shallowMount } from "@vue/test-utils";
import FormContact from "@/components/FormComponents/FormContact.vue";

describe('FormContact.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(FormContact);
    })

    afterEach(()=>{
        wrapper = null;
    })
    it("should render FormContact component",async ()=>{
        expect(wrapper.attributes('id')).toBe('formContact');
    })

    it('should submit and call sendContact',async ()=>{
        const mockSendContact = jest.fn();

        wrapper.vm.sendContact = mockSendContact;
        await wrapper.find("#email").setValue("email.test@gmail.com");
        await wrapper.find("#message").setValue("lorem ispum is");

        await wrapper.find('#formContact form section:last-child div:last-child button').trigger("submit");
        expect(mockSendContact).toHaveBeenCalled();
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.contactData.email).toEqual("email.test@gmail.com");
        expect(wrapper.vm.contactData.message).toEqual("lorem ispum is");
    })
})
