export function httpGet(url){
    return fetch(url);
};
export function httpPost(url,params){
    return fetch(url,params);
};