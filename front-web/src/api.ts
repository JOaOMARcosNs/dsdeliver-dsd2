import axios from "axios";
const APi_URL = "http://localhost:8080"

export function fetchProducts(){
    return axios(`${APi_URL}/products`)
}