//------------------------------------------------------------------------------
export function cacheSet(key, content) {

    sessionStorage.setItem(key, JSON.stringify(content));

}
//------------------------------------------------------------------------------
export function cacheGet(key) {

    let cachedValue = sessionStorage.getItem(key);

    if (cachedValue) {
        return JSON.parse(cachedValue);
    }
    else {
        return null;
    }
}
//------------------------------------------------------------------------------

