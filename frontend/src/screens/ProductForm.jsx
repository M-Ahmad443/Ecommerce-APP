
import TextField from "../components/TextField"
import "../css/productForm.css"
import "../css/button.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { create_product } from "../redux/features/productSlice"


const ProductForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [productFormValue, setProductFormValue] = useState({
    title: "",
    description: "",
    price: "",
  })

  const handleFileSelect = (event) => {
    const product_pic = event.target.files[0]
    console.log("file",product_pic,productFormValue);
    setProductFormValue({ ...productFormValue, product_pic: product_pic })
  }
  const submit = async (e) => {
    e.preventDefault()
    const product_pic = productFormValue?.product_pic
    const title = productFormValue.title
    const description = productFormValue.description
    const price = productFormValue.price

    const formData = new FormData()
    formData.append('product_pic', product_pic)
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    

    dispatch(create_product(formData))


    setProductFormValue({
      title: "",
      description: "",
      price: "",
    })
    navigate('/', { replace: false })

  }



  const onChange = (e) => {

    setProductFormValue((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))

  }







  return (
    <section className="register-main">
      <div className="register-form-title">
        <h2><u>Add Product</u></h2>

      </div>
      <form action="post" onSubmit={submit} className="product-form">
        <TextField label='Title' onChange={onChange} value={productFormValue.title} inputProps={{ placeholder: 'Title', type: 'title', name: 'title' }}></TextField>

        <TextField label='Description' onChange={onChange} value={productFormValue.description} inputProps={{ placeholder: 'Description', type: 'description', name: 'description' }}></TextField>

        <TextField label='price' onChange={onChange} value={productFormValue.price} inputProps={{ placeholder: 'Price', type: 'price', name: 'price' }}></TextField>

        <label> <input type="file" onChange={handleFileSelect} name="product_pic" /></label>

        <button className='button' type='submit' >Add Product</button>
      </form>


    </section>
  )
}
export default ProductForm