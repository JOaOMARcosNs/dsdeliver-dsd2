import axios from "axios"

const API_URL = 'https://joao-marcos-sds2.herokuapp.com'

export default function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery (orderID: number) {
   return axios.put(`${API_URL}/orders/${orderID}/delivered`) 
}