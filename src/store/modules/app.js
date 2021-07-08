import { login } from "@/api/login.js";
import {
  getToken,
  setToken,
  removeToken,
  getUsername,
  setUsername,
  removeUsername
} from "@/utils/storage.js";
const state = {
  token: getToken() || "",
  username: "" || getUsername(),
  collapse: JSON.parse(sessionStorage.getItem("collapse")) || false
};
const getters = {};
const mutations = {
  SET_TOKEN(state, value) {
    state.token = value;
  },
  SET_USERNAME(state, value) {
    state.username = value;
  },
  SET_COLLAPSE(state) {
    state.collapse = !state.collapse;
    sessionStorage.setItem("collapse", String(state.collapse));
  }
};
const actions = {
  loginAction({ commit }, params) {
    return new Promise((resolve, reject) => {
      login(params)
        .then(res => {
          console.log(res);
          commit("SET_TOKEN", res.token);
          commit("SET_USERNAME", res.username);
          setToken(res.token);
          setUsername(res.username);
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
