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

    it('should props widthchanged value to true',async ()=>{
        const widthchanged:boolean = true;
        await wrapper.setProps({widthchanged})
        expect(wrapper.props('widthchanged')).toBeTruthy();
    })
})
