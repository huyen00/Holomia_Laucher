import ApiService from "@/common/apiService";

export default {
    getDevice({commit,state}){
        console.log("committt",{commit})
        console.log("committt",{state})
        console.log("committt",state.currentPage)
       return  ApiService.query(`api/v1/devices?page=${state.currentPage}&sortBy=${state.sortBy}&sortDirection=${state.sortDirection}`)
     
     },
}