
import TextField from "../components/TextField"
import "../css/register.css"
import "../css/button.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register_user } from "../redux/features/authSlice"



const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()





  const [registerValue, setRegisterValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: ""

  })

  // const formData = new FormData()

  // const [selectedFile, setSelectedFile] = useState();





  let url = ""
  const submit = async (e) => {
    e.preventDefault()
    const profile_pic = registerValue?.profile_pic
    const name = registerValue.name
    const email = registerValue.email
    const password = registerValue.password
    const gender = registerValue.gender
    const address = registerValue.address

    const formData = new FormData()

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('profile_pic', profile_pic)

    // Display the values
   //let stringiftData = JSON.stringify(formData)
   // let parsedData = JSON.parse(stringiftData)

   // console.log(stringiftData, parsedData);
   
   dispatch(register_user(formData))
   

    //  const response = await axios.post('http://localhost:4000/api/v1/register', formData);
    // console.log(response)

    // console.log({...formData,...registerValue});


    setRegisterValue({
      name: "",
      email: "",
      password: "",
      gender: "",
      address: ""


    })
    navigate('/', { replace: false })

  }



  const onChange = (e) => {

    setRegisterValue((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
    
  }

  const handleFileSelect = (event) => {
    const profile_pic = event.target.files[0]
    setRegisterValue({ profile_pic: profile_pic, ...registerValue })
    // setRegisterValue((prev)=>({...prev, [e.target.name] : e.target.files[0] }));
  }





  return (
    <section className="register-main">
      <div className="register-form-title">
        <h2><u>Register User</u></h2>

      </div>
      <form action="post" onSubmit={submit} className="login-form">
        <TextField label='Name' onChange={onChange} value={registerValue.name} inputProps={{ placeholder: 'Name', type: 'name', name: 'name' }}></TextField>

        <TextField label='Email' onChange={onChange} value={registerValue.email} inputProps={{ placeholder: 'Email', type: 'email', name: 'email' }}></TextField>

        <TextField label='Password' onChange={onChange} value={registerValue.password} inputProps={{ placeholder: 'Password', type: 'password', name: 'password' }}></TextField>

        <TextField label='Gender' onChange={onChange} value={registerValue.gender} inputProps={{ placeholder: 'Gender', type: 'gender', name: 'gender' }}></TextField>

        <TextField label='Address' onChange={onChange} value={registerValue.address} inputProps={{ placeholder: 'Address', type: 'address', name: 'address' }}></TextField>

        <label> <input type="file" onChange={handleFileSelect} name="profile_pic" /></label>

        <button className='button' type='submit' >Register</button>
      </form>


    </section>
  )
}
export default Register