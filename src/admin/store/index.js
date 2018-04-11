import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import skills from './modules/skills';
import papers from './modules/papers';
import works from './modules/works';

const store = new Vuex.Store({
    modules: { skills, papers, works },
});

export default store;
