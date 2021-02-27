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
})
