import { shallowMount,mount, VueWrapper } from '@vue/test-utils';
import App from "@/App.vue";

describe('Home.vue', () => {
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

    expect(wrapper.vm.$route.path).toBe($route.path);
  })

  it("should render h-chat component",()=>{
    const wrapper = shallowMount(App);
    expect(wrapper.find('h-chat').exists()).toBe(true);
  })

  it("should render m-chat component",()=>{
    const wrapper = shallowMount(App);
    expect(wrapper.find('m-chat').exists()).toBe(true);
  })
})
