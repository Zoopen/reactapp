import {base} from "./base"
import {httpGet,httpPost} from "../utils/http"

let api = {
    getBanner(){
        return httpGet(base.ownUrl + base.banner)
    }
}

export default api;