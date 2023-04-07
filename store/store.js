import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import auth from './auth/store'
export default {
    namespaced: true,
    modules:{
        auth
     
    },
    state,
    mutations,
    actions,
    getters,
};