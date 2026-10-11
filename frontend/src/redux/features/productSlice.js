import {createAsyncThunk,createSlice} from  "@reduxjs/toolkit"
import prod from "../services/productService"


const state = {
    products: [] ,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message: ""
}


export const create_product= createAsyncThunk('/create_product',async(productFormValue,thunkAPI)=>{
try {
    const token = thunkAPI.getState().auth.user.token
    
    return await prod.create_product_service (productFormValue,token)
} catch (error) {
    const message = error?.response?.data?.message || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    
}

}) 

export const get_product= createAsyncThunk('/get_product',async(_,thunkAPI)=>{

    try {
        
    const token = thunkAPI.getState().auth.user.token
        return await prod.get_product_service(token)
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        }}) 
   
export const productSlice = createSlice({
    name: "product",
    initialState:state,
    reducers:{
        reset : (state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message= ""
            state.products = null
        }
},
    extraReducers : (builder)=>{
        
        builder.addCase(create_product.pending,(state)=>{
            state.isLoading=true

        }).addCase(create_product.fulfilled,(state,action)=>{

            state.isLoading = false
            state.isSuccess = true
            state.products.push(action.payload)

        }).addCase(create_product.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload

        }).addCase(get_product.pending,(state)=>{
            state.isLoading=true

        }).addCase(get_product.fulfilled,(state,action)=>{

            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload

        }).addCase(get_product.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
           

        })
    }
})
export default productSlice.reducer
export const {reset}= productSlice.actions