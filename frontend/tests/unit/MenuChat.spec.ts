import { shallowMount } from "@vue/test-utils";
import MenuChat from '@/components/MenuChat.vue';

describe('MenuChat.vue', () => {
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(MenuChat);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render MenuChat component',()=>{
        expect(wrapper.attributes('id')).toBe("menuChat");
    })

    it('should emit boolean widthchange to "true"', ()=>{
        wrapper.vm.$emit('widthchange',true);
        wrapper.vm.$nextTick();
        expect(wrapper.emitted().widthchange[0][0]).toEqual(true);
    })

    it('should emit boolean widthchange to "false"', ()=>{
        wrapper.vm.$emit('widthchange',false);
        wrapper.vm.$nextTick();
        expect(wrapper.emitted().widthchange[0][0]).toEqual(false);
    })

    it('should call changeWidth methods', ()=>{
        const changeWidthMock = jest.fn();
        wrapper.vm.changeWidth = changeWidthMock;
        wrapper.find('label').trigger('click');
        expect(changeWidthMock.mock.calls.length).toBe(1);
    })

})
