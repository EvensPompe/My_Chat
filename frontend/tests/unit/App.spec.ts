import { shallowMount, mount } from '@vue/test-utils';
import App from "@/App.vue";

describe('App.vue', () => {
  it('should go to "/" route', () => {
    const $route = {
      path:"/"
    }

    const wrapper = mount(App,{
      global:{
        mocks:{
          $route
        }
      }
    });  

    expect(wrapper.vm.$route).toBe($route);
  })

  it("should render h-chat component",()=>{
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({name:'h-chat'}).exists()).toBe(true);
  })

  it("should render m-chat component",()=>{
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({name:'m-chat'}).exists()).toBe(true);
  })

  it("should render aside-menu component",()=>{
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent({name:'aside-menu'}).exists()).toBe(true);
  })
})
