import { api } from "../../config"
import axios from "axios"

const getAnime = (id, query = '') => axios.get(`${api}anime/${id}${query}`)

export {
    getAnime
}