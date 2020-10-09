import { mount, shallowMount } from "@vue/test-utils";
import MenuChat from '@/components/MenuChat.vue';
import { createStore } from 'vuex';

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

    // it('should emit boolean widthchange to "true"', ()=>{
    //     wrapper.vm.$emit('widthchange',true);
    //     wrapper.vm.$nextTick();
    //     expect(wrapper.emitted().widthchange[0][0]).toBeTruthy();
    // })

    // it('should emit boolean widthchange to "false"', ()=>{
    //     wrapper.vm.$emit('widthchange',false);
    //     wrapper.vm.$nextTick();
    //     expect(wrapper.emitted().widthchange[0][0]).toBeFalsy();
    // })


    it('should call changeWidth methods', ()=>{
        const changeWidthMock = jest.fn();
        wrapper.vm.changeWidth = changeWidthMock;
        wrapper.find('label').trigger('click');
        expect(changeWidthMock.mock.calls.length).toBe(1);
    })

    it('should call commit "widthChanging" with value true',()=>{
        const store = createStore({
            state: {
                widthChange:false,
              },
              mutations: {
                widthChanging(state,payload){
                  state.widthChange = payload;
                }
              },
              actions: {
                widthChanging({commit},payload){
                  commit('widthChanging',payload);
                }
            },
        })
        store.dispatch('widthChanging',true);
        expect(store.state.widthChange).toBeTruthy();
    })

    it('should call commit "widthChanging" with value false',()=>{
        const store = createStore({
            state: {
                widthChange:false,
              },
              mutations: {
                widthChanging(state,payload){
                  state.widthChange = payload;
                }
              },
              actions: {
                widthChanging({commit},payload){
                  commit('widthChanging',payload);
                }
            },
        })
        store.dispatch('widthChanging',false);
        expect(store.state.widthChange).toBeFalsy();
    })

})
