import token from "@/common/token";

export default{
    SET_LOGIN(state, data){
        console.log("login state",state)
        console.log("login",data)

    },
    LOGIN_SUCCESS(state,data){
        state.success =true;
        state.errors=null;
        token.saveToken(data.token)
        state.token =data.token;
        state.msg = data.msg
        state.userInfo = data.user
        state.isAuthenticated =!!token.getToken()
    },
    LOGIN_FAIL(state,errors){
        state.success =false;
        state.msg=errors.msg;

    },
   
}