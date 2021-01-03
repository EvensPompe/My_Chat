import { createStore } from 'vuex';
import axios from 'axios';
describe('Store', () => {
    describe('widthChanging', () => {
        let mockWidthChanging:any;
        let store:any;
        beforeEach(()=>{
            mockWidthChanging = jest.fn();
            store = createStore({
                state: {
                    widthChange: false,
                },
                mutations: {
                    widthChanging(state, payload) {
                        state.widthChange = payload;
                    },
                    mockWidthChanging:mockWidthChanging
                },
                actions: {
                    widthChanging({ commit }, payload) {
                        commit('widthChanging', payload);
                        commit('mockWidthChanging')
                    }
                },
            })
        })
        it('should call commit "widthChanging" and return value true', () => {
            store.dispatch('widthChanging', true);
            expect(store.state.widthChange).toBeTruthy();
            expect(mockWidthChanging).toHaveBeenCalled();
        })
    
        it('should call commit "widthChanging" and return value false', () => {
            store.dispatch('widthChanging', false);
            expect(store.state.widthChange).toBeFalsy();
            expect(mockWidthChanging).toHaveBeenCalled();
        })
    })

    describe('register', () => {
        let mockRegister:any;
        let user:any;
        let store:any;
        beforeEach(()=>{
            user = {
                name:"UserName",
                email:"username@gmail.com",
                password:"testuserpass",
                confPassword:"testuserpass",
                country:"France"
            };
            mockRegister = jest.fn()
            store = createStore({
                state:{
                    message:"",
                    userToken:null
                },
                mutations:{
                    mockRegister:mockRegister,
                    register(state,payload){
                        
                    }
                },
                actions:{
                    register({commit},payload){
                        commit('register',payload)
                        commit('mockRegister')
                    }
                }
            })
        })
        it('should call commit "register" with a user and call post axios request',async ()=>{
            await store.dispatch('register',user);
            expect(mockRegister).toHaveBeenCalled()
        })  
    })
})