
/**
 * @description method to set localstorage
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param key key name
 * @param value value
 */
export const setLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
        return localStorage.setItem(key, value);
    }
    const a =getLocalStorage('token')

}

/**
 * @description method to get a key from localstorage
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param key key name
 */
export const getLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
}

/**
 * @description method to clear all localstorage
 * @author Satyam_kushwaha
 * @date 2022-10-21
 */
export const clearLocalStorage = () => {
    if (typeof window !== "undefined") {
        return localStorage.clear()
    }
}

/**
 * @description method to remove a key from localstorage
 * @author Satyam_kushwaha
 * @date 2022-10-21
 * @param key key name
 */
export const removeLocalStorageKey = (key) => {
    if (typeof window !== "undefined") {
        return localStorage.removeItem(key)
    }
}

/**
 * @description method to set object in localstorage
 * @author Satyam_kushwaha
 * @date 2022-10-22
 * @param key string
 * @param value object{}
 */
export const setLocalStorageObj = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description method to get object from localstorage
 * @author Satyam_kushwaha
 * @date 2020-10-22
 * @param key string
 * @returns Object{}
 */
export const getLocalStorageObj = (key) => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem(key));
    }
}