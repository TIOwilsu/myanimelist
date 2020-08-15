import { api } from "../../config"
import axios from "axios"


const getUser = (name) => axios.get(`${api}user/${name}`).then(({ data }) => data)

const getAllAnimeList = (name,status) => {
    try{
        return axios.get(`${api}user/${name}/animelist/${status}`).then(({ data }) => data)
    } catch(err){
        console.log(err)
    }
}

export {
    getUser,
    getAllAnimeList
}