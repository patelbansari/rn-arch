import axios from "axios";
import config from "../config/apiConfig";

const client = (() => {
    return axios.create({
        baseURL: config.Base_url,
        timeout: config.timeout,
        timeoutErrorMessage: 'Please check your connection and Try again.'
    });
})();

const request = async function (options, ) {
    console.log('option',options)
    const onSuccess = function (response) {
        return response.data;
    }

    const onError = function (error) {
        return Promise.reject(error.response || error.message)
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);


}

export default request;  