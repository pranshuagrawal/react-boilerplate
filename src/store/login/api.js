import axios from 'axios';
export const performLoginApi = (payload) => {
    return axios.post('http://api.gookarma.com/api/v1/user/login', payload)
        .then(res => {
            return res;
        });
}