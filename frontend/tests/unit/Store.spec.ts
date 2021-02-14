import { createStore } from 'vuex';
import axios from 'axios';

describe('Store', () => {
    describe('widthChanging', () => {
        let mockWidthChanging: any;
        let store: any;
        beforeEach(() => {
            mockWidthChanging = jest.fn();
            store = createStore({
                state: {
                    widthChange: false,
                },
                mutations: {
                    widthChanging(state, payload) {
                        state.widthChange = payload;
                    },
                    mockWidthChanging: mockWidthChanging
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
        interface user {
            name: string,
            email: string,
            password: string,
            confPassword: string,
            country: string
        }

        let user: user;
        let existingUser: user;
        let mockRegister: jest.Mock;
        let mockLoading:jest.Mock;
        let mockError: jest.Mock;
        let mockConfirmation: jest.Mock;
        let store: any;
        let postSpy: jest.SpyInstance;

        beforeEach(async () => {
            user = {
                name: "",
                email: "",
                password: "",
                confPassword: "",
                country: ""
            };

            existingUser = {
                name: "userTest",
                email: "userTest@test.com",
                password: "passwordTest",
                confPassword: "passwordTest",
                country: "Testistan"
            };

            postSpy = jest.spyOn(axios, "post");
            await axios.get("https://fakerapi.it/api/v1/users?_quantity=1")
                .then(res => {
                    user["name"] = res["data"]['data'][0].username;
                    user["email"] = res["data"]['data'][0].email;
                    user["password"] = res["data"]['data'][0].password;
                    user["confPassword"] = res["data"]['data'][0].password;
                }).catch(err => err)

            await axios.get('https://fakerapi.it/api/v1/addresses?_quantity=1')
                .then(res => {
                    user["country"] = res["data"]['data'][0].country;
                }).catch(err => err)

            mockRegister = jest.fn();
            mockConfirmation = jest.fn();
            mockError = jest.fn();
            mockLoading = jest.fn();
            store = await createStore({
                state: {
                    message: null,
                    error:null,
                    isLoading:false
                },
                mutations: {
                    mockRegister: mockRegister,
                    mockError:mockError,
                    mockLoading:mockLoading,
                    register(state, message) {
                        state.message = message;
                    },
                    error(state, error) {
                        state.error = error;
                    },
                    mockConfirmation: mockConfirmation,
                    confirmation(state, payload) {
                        localStorage.setItem('token',payload.token);
                        state.message = payload.message;
                    },
                    loading(state,payload){
                        state.isLoading = payload;
                    }
                },
                actions: {
                    register({ commit }, user) {
                        return new Promise((resolve,reject)=>{
                            commit('loading',true);
                            commit('mockLoading');
                            axios.post('http://localhost:3000/user/new', user)
                            .then(res => {
                                if (res['data']['message']) {
                                    commit('register', res['data'].message);
                                    commit('mockRegister')
                                    commit('loading',false);
                                    commit('mockLoading');
                                    resolve(res)
                                } else if (res['data']['error']) {
                                    commit('error', res['data'].error);
                                    commit('mockError')
                                    commit('loading',false);
                                    commit('mockLoading');
                                    resolve(res)
                                }
                            }).catch(err => reject(err))
                        })
                    },
                    confirmation({ commit }, payload) {
                        commit('confirmation', payload);
                        commit('mockConfirmation')
                    }
                }
            })
        })

        afterEach(() => {
            postSpy.mockClear();
            mockError.mockReset();
            mockConfirmation.mockReset();
            mockLoading.mockReset();
            mockRegister.mockReset();
        })

        it('should call commit "register" with a user and call post axios request and return a message', async () => {
            await store.dispatch('register', user);
            expect(mockRegister).toHaveBeenCalled();
            expect(mockLoading).toHaveBeenCalledTimes(2);
            expect(store.state.isLoading).toBeFalsy();
            expect(postSpy).toHaveBeenCalledWith('http://localhost:3000/user/new', user);
            expect(store.state.message).toBe("Votre inscription a été pris en compte avec succès ! Un mail de confirmation a été envoyé à l'adresse mail " + user["email"]);
        })

        it('should call commit "register" with a user with wrong password and call post axios request and return a error', async () => {
            user["password"] = "dfghhhhhhh";
            await store.dispatch('register', user);
            expect(mockError).toHaveBeenCalled();
            expect(mockLoading).toHaveBeenCalledTimes(2);
            expect(store.state.isLoading).toBeFalsy();
            expect(postSpy).toHaveBeenCalledWith('http://localhost:3000/user/new', user);
            expect(store.state.error).toBe("Le mot de passe est incorrecte !");
        })

        it('should call commit "register" with an already existing user and call post axios request and return a error', async () => {
            await store.dispatch('register', existingUser);
            await store.dispatch('register', existingUser);
            expect(mockError).toHaveBeenCalled();
            expect(mockLoading).toHaveBeenCalledTimes(4);
            expect(store.state.isLoading).toBeFalsy();
            expect(postSpy).toHaveBeenCalled();
            expect(store.state.error).toBe("Le compte existe déjà !");
        })

        it('Simulate the confirmation of a user and it should return a userToken', async () => {
            let chosenOne = await axios.get('http://localhost:3000/user/last');
            let conf = await axios.get(`http://localhost:3000/user/confirm?&jwt=${chosenOne["data"].token}`);
            expect(conf["data"]['message']).toBeTruthy();
            expect(conf["data"]['token']).toBeTruthy();
            expect(conf["data"]["message"]).toBe("Votre compte a été confirmé avec succès !");
            expect(conf["data"]["token"]).toBeTruthy();
            await store.dispatch('confirmation', conf["data"]);
            expect(mockConfirmation).toBeCalled();
            expect(localStorage.getItem('token')).toBeTruthy();
            expect(localStorage.getItem('token')).toEqual(conf["data"]["token"]);
            expect(store.state.message).toEqual(conf["data"]["message"]);
        })
    })
})