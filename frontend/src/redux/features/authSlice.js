import {createAsyncThunk,createSlice} from  "@reduxjs/toolkit"
import auth from '../services/authService'


const state = {
    user :null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message: ""
}


export const register_user= createAsyncThunk('/register',async(formData,thunkAPI)=>{
try {
    return await auth.register_user_service(formData)
} catch (error) {
    const message = error.response?.data?.message || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    
}

}) 

export const login_user= createAsyncThunk('/login',async(userData,thunkAPI)=>{

    try {
        return await auth.login_user_service(userData)
    } catch (error) {
        const message = error.response?.data?.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
    
    }) 
    export const logout = createAsyncThunk('/logout',async()=>{

        return await auth.logout()

    })


export const authSlice = createSlice({
    name: "auth",
    initialState:state,
    reducers:{
        reset : (state)=>{
    state.isLoading=false
    state.isSuccess=false
    state.isError=false
    state.message= ""
    state.user = null
}
},
    extraReducers : (builder)=>{
        
        builder.addCase(register_user.pending,(state)=>{
            state.isLoading=true

        }).addCase(register_user.fulfilled,(state,action)=>{

            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload

        }).addCase(register_user.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
            state.user=null

        }).addCase(login_user.pending,(state)=>{
            state.isLoading=true

        }).addCase(login_user.fulfilled,(state,action)=>{

            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload

        }).addCase(login_user.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
            state.user=null

        }).addCase(logout.fulfilled,(state)=>{
            
            state.user=null

        })
    }
})
export default authSlice.reducer
export const {reset}= authSlice.actions