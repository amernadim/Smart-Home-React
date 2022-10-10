import About from "../components/About";
import Cart from "../components/Cart";
import Home from "../components/Home";
import Root from "../layout/Root";
import Shop from "../components/Shop"
import ErrorPage from "../components/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { productAndCartData } from "../loader/productAndCartData";

export const router = createBrowserRouter([
 { path: '/' ,
   element : <Root/>,
   errorElement : <ErrorPage/> ,
   loader : productAndCartData,
   children : [
  {path : '/' ,     element : <Home/> },
  {path : '/home' , element : <Home/> },
  {path : '/about', element : <About/> },
  {path : '/cart' , element : <Cart/>},
  {path : '/shop' , element : <Shop/>
  }
 ]}
]);