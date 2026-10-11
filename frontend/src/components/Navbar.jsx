import { FaCartPlus, FaUser } from 'react-icons/fa'
import '../css/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { logout, reset } from '../redux/features/authSlice'
const Navbar = () => {
    const result = useSelector(state => state.auth)
   
    const url = `http://localhost:4000/${result?.user?.path}`

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onLogout = () => {
        // localStorage.removeItem('user')
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <div>
            <header className='header'>
                <nav className="nav">

                    <div className="logo">
                        {result?.user?.path && <img src={url} className=" image" alt="profile" />}

                    </div>
                    <div className="logo">
                        <h2><i>{result?.user?.name}</i></h2>
                    </div>

                    <ul className="nav-items">



                        {
                            result?.user?.roles === "customer" && <>

                                <li className="nav-Link">
                                    <Link to="">All Products</Link>
                                </li>
                                <li className="navLink">
                                    <Link onClick={onLogout}>logout</Link>
                                </li>
                            </>
                        }

                        {
                            result?.user?.roles === "StoreOwner" && <>

                                <li className="nav-Link">
                                    <Link to="">All Products</Link>
                                </li>
                                <li className="nav-Link">
                                    <Link to="">Delete Product</Link>
                                </li>
                                <li className="navLink">
                                    <button onClick={onLogout}>logout</button>
                                </li>
                            </>
                        }

                        {
                            result?.user?.roles === "admin" && <>

                                <li className="nav-Link">
                                    <Link to="">All Products</Link>
                                </li>
                                <li className="nav-Link">
                                    <Link to="">Your Products</Link>
                                </li>
                                <li className="nav-Link">
                                    <Link to="/create-product">create Product</Link>
                                </li>
                                <li className="nav-Link">
                                    <Link to="">update Product</Link>
                                </li>
                                <li className="navLink">
                                    <button onClick={onLogout}>logout</button>
                                </li>
                            </>
                        }
                        { 
                            !( result?.user )&&<>
                             <li className="nav-Link">
                            <Link to="/login">Login</Link>
                            <FaUser />
                        </li>
                            <li className="navLink">
                                <Link to="/register">Register</Link>
                            </li></>
                        }

                        

                        <FaCartPlus />
                    </ul>

                </nav>
            </header>
        </div>
    )
}
export default Navbar