// user
import * as types from '../mutations';

// state
const state = {
  test: 0
};

// getters

const getters = {
  test: (state) => state.test
};

// mutations

const mutations = {

  [types.SET_TEST] (state, {test}) {
    state.test = test;
  }
};

// actions

const actions = {
  setTest ({commit, state}, test) {
    commit(types.SET_TEST, {test});
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
