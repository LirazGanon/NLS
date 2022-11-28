import { createStore } from 'vuex';

// import userStore from './modules/user-store.js';
import { cmpStore } from './modules/cmp-store.js';
import { siteStore } from './modules/site.js';


const store = createStore({
  strict: true,
  state: {

  },
  modules: {
    // userStore,
    cmpStore,
    siteStore
  },
});

export default store;

