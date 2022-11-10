import axios from "axios"

export const getScoops = () => {
    axios.get(`http://localhost:3030/scoops`)
    .then(response => response.data)
}

export const getToppings= () => {
    axios.get(`http://localhost:3030/toppings`)
    .then(response => response.data)
}