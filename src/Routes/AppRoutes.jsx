import{ BrowserRouter, Routes , Route} from "react-router-dom";
import  Home from "../pages/Home"
import Profile from "../pages/Profile"
import Login from "../pages/Login";
import AdminAddProduct from "../pages/AdminAddProduct";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/admin/add-product" element={<AdminAddProduct/>}/>

        </Routes>
    </BrowserRouter>
    
  )
}
