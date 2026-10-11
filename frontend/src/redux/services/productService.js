import axios from "../../axios/axios";

const create_product_service = async(productFormValue,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post('/create_product',productFormValue,config)

   console.log(response);
    return response.data

}

const get_product_service = async(token)=>{
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get('/get_product',config)
      
    return response.data

}
const prod= {
    create_product_service,
    get_product_service
}
export default prod