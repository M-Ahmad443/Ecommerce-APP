import "../css/login.css"
import "../css/button.css"
import TextField from "../components/TextField"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { login_user, reset } from "../redux/features/authSlice"
import joi, { schema } from "joi-browser"
import { Schema } from "mongoose"
import { useEffect } from "react"
import spinner from "../components/spinner"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const result=useSelector(state=>state.auth)
 
const {user,isLoading,isSuccess,isError,message}=result

  const [errs, setErrs] = useState({})
  const [loginValue, setLoginValue] = useState({

    email: "",
    password: ""

  })
  // const schema =joi.object({


  //   email: joi.string().email().required("email is require field").trim().lowercase(),
  //   password: joi.string().required().trim().min(6),


  // })
  // const validation = () => {

  //   const errors = {}
  //   const {error}=  schema.validate(loginValue)
    
    
  //   console.log("result",error.details);
  //   if (!error)return null
  //   for(let item of error.details){
  //     errors[item.path[0]]=item.message
  //   }
  //   if (loginValue.email.trim() === '') {
  //     errors.email = "email is required"
  //   }

  //   if (loginValue.password.trim() === '') {
  //     errors.password = "password is required"
  //   }
  //   return errors.length === 0 ? null : errors
  // }

  // const validateProperty=({name,value})=>{
  //   const obj={[name]:value}
  //   const schema = {[name]:schema[name]}
  //   const {error}=  schema.validate(loginValue)
  //   return error? error.details[0].message:null

  // }



 useEffect(()=>{
  if (isError) {
    console.log(message)
    }

    if (isSuccess||user) {
      navigate('/')

      
    }

    

 },[user,isSuccess,isError,message,navigate,dispatch])

  const submit = (e) => {
    e.preventDefault()

    dispatch(login_user(loginValue))
    setLoginValue({

      email: "",
      password: ""

    })
    // if (isLoading) {
    //   return spinner
      
    // }
    // const errors = validation()
    // console.log(errors);
    // setErrs(errors)
    // if (errors) return;
    // navigate("/", { replace: false })

  }



  const onChange = (e) => {

    setLoginValue((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
  }


  return (
    <section className="login-main">
      <div className="login-form-title">
        <h2><u>Login User</u></h2>
      </div>
      <form action="post" onSubmit={submit} className="login-form">


        <TextField label='Email' onChange={onChange} value={loginValue.email} inputProps={{ placeholder: 'Email', type: 'email', name: 'email' }} errors={errs.email}></TextField>

        <TextField label='Password' onChange={onChange} value={loginValue.password} inputProps={{ placeholder: 'Password', type: 'password', name: 'password' }} errors={errs.password}></TextField>

        <button className='button' type='submit'>login</button>
      </form>


    </section>
  )
}
export default Login