
import ApiService from "@/common/apiService"
export default{
Login({commit}, {email, password}){
        console.log("login1",password)
        console.log("login1",email)
        console.log("login1",commit)
        return  ApiService.post('api/v1/login', {email:email, password:password})
     
    }
}