import Axios from 'axios';
import * as config from '../config/app.config';
import { getLocalStorage } from './session';

const LANG = getLocalStorage('lang');
const   getUrl = (endpoint) => {
    return config.API_HOST + endpoint;
}


/**
 * @description POST method to call post api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const Post = async (endpoint,data) => {
    return Axios.post(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}

/**
 * @description GET method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint: String - endpoint for api
 * @param extraHeaders: Object - extra headers
 */
export const Get = async (endpoint,data) => {
    return Axios.get(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en',

        }
    })
}

export const Put= async (endpoint, data) => {
    return Axios.put(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}

export const Patch= async (endpoint, data) => {
    return Axios.patch(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}

/**
 * @description DELETE method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint: String - endpoint for api
 * @param id payload ID
 * @param extraHeaders: Object - extra headers
 */

export const DeleteById = async (endpoint,id) => {
    return Axios.delete(getUrl(endpoint),{id},{
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en',

        }
    })
}

/**
 * @description PUT method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint: String - endpoint for api
 * @param data payload data
 * @param extraHeaders: Object - extra headers
 */

export const UpdateById=async(endpoint,data)=>{
    return Axios.put(getUrl(endpoint),{...data}, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        },
    })
}


/**
 * @description GET method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param url: String - api url
 * @param extraHeaders: Object - extra headers
 */
export const getWithUrl = async (url, extraHeaders = {}) => {
    return Axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en',
            ...extraHeaders
        }
    })
}

/**
 * @description GET method to call get api (without token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param url: String - api url
 * @param extraHeaders: Object - extra headers
 */
export const postWithUrl = async (url, data, extraHeaders = {}) => {
    return Axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en',
            ...extraHeaders
        }
    })
}

/**
 * @description POST method to call post api (with basic auth)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 */
// export const PostWithBasicAuth = async (endpoint) => {
//     Axios.token.headers.common['authorization'] = await config.BASIC_AUTH;
//     return Axios.post(getUrl(endpoint), {
//         headers: {
//             'Content-Type': 'application/json',
//             // 'language': LANG || 'en'
//         }
//     })
// }


/**
 * @description POST method to call post api (with add token in header)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param token the token which you want to add in the header
 * @param data payload data
 */
 export const PostWithAddToken = async (endpoint, token,data) => {
    Axios.defaults.headers.common['authorization'] = token;
    return Axios.post(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}
    
/**
 * @description POST method to call post api (with token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const PostWithToken = async (endpoint, data) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.post(getUrl(endpoint), { ...data }, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}

/**
 * @description GET method to call get api (with token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 */
export const GetWithToken = async (endpoint) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.get(getUrl(endpoint)
        // , {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'language': LANG || 'en'
        //     }
        // }
    )
}
/** 
 * @description GET method to call get api (with token) and download file comes from backend
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
*/

export const GetWithTokenFile = async (endpoint) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.get(getUrl(endpoint)
        , {
            headers: {
                'Content-Type': 'application/json',
                'language': LANG || 'en'
            },
            responseType: 'blob', // important
        }
    )
}


/**
 * @description PATCH method to call patch api (with token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const PatchWithToken = async (endpoint, data) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.patch(getUrl(endpoint), data, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}

/**
 * @description PUT method to call put api (with token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const PutWithToken = async (endpoint, data) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.put(getUrl(endpoint), data, {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        }
    })
}


/**
 * @description DELETE method to call delete api (with token)
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param endpoint endpoint for api
 * @param data payload data
 */
export const DeleteWithToken = async (endpoint, data) => {
    Axios.defaults.headers.common['authorization'] = await getLocalStorage('token');
    return Axios.delete(getUrl(endpoint), {
        headers: {
            'Content-Type': 'application/json',
            // 'language': LANG || 'en'
        },
        data: data
    })
}


Axios.interceptors.request.use((request) => {
    request.headers['Content-Type'] = "application/json";
    // request.headers['language'] = LANG || 'en'
    return request
}, function (error) {
    return Promise.reject(error);
}, { synchronous: true })



Axios.interceptors.response.use((response) => {
    // console.log('response', response)
    return Promise.resolve(response)
}, function (error) {
    if (!error || !error.response) {
        return Promise.reject(error);
    }
    if (error?.response?.status === 401) {
        // showToast("Session Exprired!", 'info')
    }
    return Promise.reject(error);
})
