import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue'
import {createRouter, createMemoryHistory } from 'vue-router';
import routes from '@/router/routes';

describe('Home.vue',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper = shallowMount(Home);
    })

    afterEach(()=>{
        wrapper = null;
    })

    it('should render Home view',()=>{
       expect(wrapper.attributes('id')).toBe('home');
    })

    it('should click to the login button and push to "/login" route',async ()=>{
        const router = createRouter({
            history:createMemoryHistory(),
            routes
        })

        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        expect(wrapper.find('#home section div:last-child div:last-child button'))
        await wrapper.find('#home section div:last-child div:last-child button').trigger('click');
        expect(goTo).toHaveBeenCalled();
        router.push('/login');
        await router.isReady();
        expect(router.currentRoute.value.path).toEqual("/login")
    })

    it('should click to the register button and push to "/register" route',async ()=>{
        const router = createRouter({
            history:createMemoryHistory(),
            routes
        })

        const goTo = jest.fn();
        wrapper.vm.goTo = goTo;
        expect(wrapper.find('#home section div:last-child div:first-child button'))
        await wrapper.find('#home section div:last-child div:first-child button').trigger('click');
        expect(goTo).toHaveBeenCalled();
        router.push('/register');
        await router.isReady();
        expect(router.currentRoute.value.path).toEqual('/register')
    })
})