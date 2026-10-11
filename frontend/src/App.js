import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import ProductForm from "./screens/ProductForm";


function App() {
  return (
    <>
    
      <Navbar/>
     <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="create-product" element={<ProductForm/>}/>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="home" element={<Home/>}/>
     </Routes>
      
    </>
  );
}

export default App;
