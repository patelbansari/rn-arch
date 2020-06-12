import request from "./Api";
import config from "../config/apiConfig";

const post = async function (apiName, requestBody) {
    return request({
        url: config.Base_url + apiName,
        method: 'Post',
        data: requestBody,
    });
}

const get = async function (apiName,params = null ) {
    let url = '';
    if (params != null) {
        url = '?'
        Object.entries(params).map(([key, value], index) => {
            url += key + "=" + value
            if (index < Object.entries(params).length - 1) {
                url += '&'
            }
        })
    }
    return request({
        url: config.Base_url + apiName + url,
        method: 'Get',

    });
}
export default apiService = {
    post,
    get
}