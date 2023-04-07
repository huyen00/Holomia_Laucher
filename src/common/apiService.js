
import axios from "axios"
import config from "./config";
import jwtToken from "./token";
axios.defaults.headers[
    "Authorization"
] =jwtToken.getToken()? `Bearer ${jwtToken.getToken()}`:'';
const ApiService = {

 

    query(resource) {
        console.log(resource)
        return axios.get(config.API_URL + "/" + resource).catch(error => {
                console.log(error)
        });
    },

    get(resource, slug) {
        return axios.get(config.API_URL + "/" + resource + "/" + slug).catch(error => {
            console.log(error)
        });
    },

    post(resource, params) {
        console.log('apiservice', params);
        return axios.post(config.API_URL + "/" + resource, params);
    },

    update(resource, params, slug) {
        // console.log('apiservice_update', params);
        return axios.post(config.API_URL + "/" + resource + "/" + slug, params);
    },

    put(resource, params) {
        // console.log('apiservice_put', params);
        // console.log('apiservice_put', resource);
        return axios.put(config.API_URL + "/" + resource, params);
    },

    delete(resource) {
        return axios.delete(config.API_URL + "/" + resource).catch(error => {
            console.log(error)
        });
    }
};

export default ApiService;