import { createStore } from 'vuex';

type Auth = {
  accessToken: string | null;
};

export default createStore<Auth>({
  state: {
    accessToken: localStorage.getItem('accessToken'),
  },
  mutations: {
    login(state, accessToken: string) {
      localStorage.setItem('accessToken', accessToken);
      state.accessToken = accessToken;
    },
    logout(state) {
      localStorage.removeItem('accessToken');
      state.accessToken = null;
    },
  },
});
