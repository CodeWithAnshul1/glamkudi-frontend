import{ BrowserRouter, Routes , Route} from "react-router-dom";
import  Home from "../pages/Home"
import Profilelayout from "../pages/profile/Profilelayout"
import Login from "../pages/Login";
import AdminAddProduct from "../pages/AdminAddProduct";
import Productdetail from "../pages/Productdetail";
import Register from "../pages/Register";
import AdminRoutes from "./AdminRoutes";
import Profiledetail from "../pages/profile/Profiledetail";
import Orders from "../pages/profile/Orders";
import Wishlist from "../pages/Wishlist";
import Bag from "../pages/Bag";
import Address from "../pages/profile/Address";
import ChangePass from "../pages/profile/ChangePass";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/login" element={<Login/>} />
            <Route path="/product/:id" element={<Productdetail />}/>
            <Route path="/signup" element={<Register/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path = "/bag" element={<Bag/>}/>

            <Route path="/profile" element={<Profilelayout/>}>
              <Route index element={<Profiledetail/>}/>
              <Route path="orders" element={<Orders/>}/>
              <Route path="addresses" element={<Address/>}/> 
              <Route path="change-password" element={<ChangePass/>}/> 
            </Route>

            <Route element={<AdminRoutes/>}>
               <Route path="/admin/add-product" element={<AdminAddProduct/>}/>
            </Route>
           

        </Routes>
    </BrowserRouter>
    
  )
}
