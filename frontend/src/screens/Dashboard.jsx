import   "../css/dashBoard.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { get_product,reset } from "../redux/features/productSlice"
import Card from "../components/Card"
const Dashboard = () => {
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.auth)
  const {products,isLoading,isError,message}  = useSelector(state =>state.product)

  const url = `http://localhost:4000/`
console.log(products);
  useEffect(()=>{
    if(!user)navigate("/login")
     
     dispatch(get_product())
    //  return()=>{dispatch(reset())}
  },[user,navigate,dispatch])

  return (
    <>
    
<h2>welcome to dashboard</h2>


    
    {/* // <section className='card-container'>
    // <Card pictureSrc='images/dairy.jpg' title='Choclate' minorDesc='30g choclate' price='60 Rs'/>
    // </section> */}
    
      <section className='card-container'>

      {products.map((product)=>(
         <Card  key={product._id} pictureSrc={url+(product?.path)} title={product.title} minorDesc={product.description} price={product.price}/>
 
      ))}

     </section>
    </>
  )
}

export default Dashboard