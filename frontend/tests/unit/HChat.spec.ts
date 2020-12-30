import { mount, shallowMount } from '@vue/test-utils';
import Hchat from '@/components/HChat.vue';
import {createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/router/routes';

describe('HChat.vue', () => {
    let wrapper: any;
    beforeEach(()=>{
       wrapper = shallowMount(Hchat);
    })

    afterEach(()=>{
        wrapper = null;
    })
    it('should render HChat component',()=>{
        expect(wrapper.attributes("id")).toEqual("hChat")
    })

    it('should emit boolean widthsend to "true"', ()=>{
        wrapper.vm.$emit('widthsend',true);
        wrapper.vm.$nextTick();
        expect(wrapper.emitted().widthsend[0][0]).toBeTruthy();
    })

    it('should emit boolean widthsend to "false"', ()=>{
        wrapper.vm.$emit('widthsend',false);
        wrapper.vm.$nextTick();
        expect(wrapper.emitted().widthsend[0][0]).toBeFalsy();
    })

    it('should click to the h1 and push to "/" route', async ()=>{
        const router = createRouter({
            history:createMemoryHistory(),
            routes
        })

        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        expect(wrapper.find('.title > h1')).toBeTruthy();
        await wrapper.find('.title > h1').trigger('click');
        expect(goTo).toHaveBeenCalled();
        router.push('/')
        await router.isReady();
        expect(router.currentRoute.value.path).toBe("/");
    })
})
