import axios from 'axios'
const API = axios.create({
    baseURL:'', // Base URL 
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials:true
})
API.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem('token')
        if(token){
            config.headers.Authorization =`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
export default API