import { BASE_URL } from '../config/constants.js';

const callApi = (endpoint, method, data = null) => {
    return axios({
        url: `${BASE_URL}/${endpoint}`,
        method, // method: method
        data, // data: data
    });
}

export default callApi;