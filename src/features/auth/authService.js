import axios from "axios";

const API_URL = 'https://peach-beaver-belt.cyclic.app/api/users/'

//creamos la peticion al backend para crear un usuario

const register = async (userData)=>{
    const response = await axios.post(API_URL, userData)

    return response.data
}

// creamos la funcion para loguear un usuario
const login = async (userData)=>{
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//creamos la funcion logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService