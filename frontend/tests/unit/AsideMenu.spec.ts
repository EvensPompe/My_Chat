import { mount } from "@vue/test-utils";
import AsideMenu from '@/components/AsideMenu.vue';

describe('AsideMenu.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = mount(AsideMenu);
    })
    
    afterEach(()=>{
        wrapper = null;
    })
    
    it('should render AsideMenu component',()=>{
       expect(wrapper.attributes("id")).toBe("asideMenu");
    })

    it("should render menu-chat component",()=>{
        expect(wrapper.findComponent({name:'menu-chat'}).exists()).toBeTruthy()
    })

    it("should click to register option and call function 'goto'",async ()=>{
        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        await wrapper.find("#register").trigger('click');
        expect(goTo).toHaveBeenCalled();
    })

    it("should click to login option and call function 'goto'",async ()=>{
        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        await wrapper.find("#login").trigger('click');
        expect(goTo).toHaveBeenCalled();
    })

    it("should click to about option and call function 'goto'",async ()=>{
        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        await wrapper.find("#about").trigger('click');
        expect(goTo).toHaveBeenCalled();
    })

    it("should click to contact option and call function 'goto'",async ()=>{
        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        await wrapper.find("#contact").trigger('click');
        expect(goTo).toHaveBeenCalled();
    })
})
