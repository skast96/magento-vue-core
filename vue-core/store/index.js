import Vue from 'vue'
import Vuex from 'vuex'

const forEach = require("../utils/foreach");

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        baseUrl: window.baseUrl,
        magento: function (requirements = {}) {
            var self = this;
            forEach.forEach(requirements, function (value, key) {
                //load needed magento modules
                self[key] = window.require(value)
            });
            self.require = window.require;
            return self;
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})

