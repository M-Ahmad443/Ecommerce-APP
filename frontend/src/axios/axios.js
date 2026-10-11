import axios from 'axios'
export default axios.create({
    baseURL : "http://localhost:4000/api/v1/",
    withCredentials: true,
       
    
    // headers: {
    //   "Content-Type": "application/json",
    // }

    // {
    //     headers:{
    //         "Content-Type":"multipart/form-data"
    //     }
    // }

})