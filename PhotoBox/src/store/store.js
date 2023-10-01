import { createStore } from "vuex";

const store = createStore({
  state: {
    no: sessionStorage.getItem("no"),
    user_id: sessionStorage.getItem("user_id"),
    user_name: sessionStorage.getItem("user_name"),
    user_login: sessionStorage.getItem("user_login"),
  },
  mutations: {
    updateUser(state, payload) {
      state.no = payload.no;
      state.user_id = payload.user_id;
      state.user_name = payload.user_name;
      state.user_login = payload.user_login;
    },
  },
  getters: {},
});

export default store;
