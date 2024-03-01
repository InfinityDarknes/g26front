import axios from "axios";

const API_URL = 'link de cicle + /api/users/'

//creamos la peticion al backend para crear un usuario

const register = async (userData)=>{
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService ={
    register
}

export default authService