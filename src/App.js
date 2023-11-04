import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Users/Home";
import Product from "./Users/Product";
import ProductDetails from "./Users/ProductDetails";
import Login from "./Users/Login";
import Register from "./Users/Register";
import Cart from "./Users/Cart";


import AdminLayout from "./Admin/Component/AdminLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>

</Route>
      </Routes>




      

    </BrowserRouter>
  );
}

export default App;
