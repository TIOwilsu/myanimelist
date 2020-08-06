import { api } from "../../config"
import axios from "axios"


const getUser = (name) => axios.get(`${api}user/${name}`).then(({ data }) => data)

const getAllAnimeList = (name) => axios.get(`${api}user/${name}/animelist/all`).then(({ data }) => data)

export {
    getUser,
    getAllAnimeList
}