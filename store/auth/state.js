
import token from "@/common/token"
export default{
    errors:null,
    success:false,
    msg: "",
    token: token.getToken() ? token.getToken():null,
    userInfo: null,
    isAuthenticated: !!token.getToken()
}