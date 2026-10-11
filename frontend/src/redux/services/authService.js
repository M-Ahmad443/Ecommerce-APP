import axios from "../../axios/axios";


  

const register_user_service = async(formData)=>{
   
    const response = await axios.post('/register',formData)

   console.log(response);
    return response.data

}

const login_user_service = async(userData)=>{

    const response = await axios.post('/login',userData)
      localStorage.setItem('user',JSON.stringify(response.data))
    return response.data

}
const logout = ()=>{
    localStorage.removeItem('user')
}

const auth= {
    register_user_service,
    login_user_service,
    logout
}

export default auth