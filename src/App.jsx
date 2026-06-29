import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Goods from "./pages/Goods";

export default function App(){

    return (

        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}  />
                <Route path="/home" element={<Home/>}  />
                <Route path="about" element={<About/>}  />
                <Route path="products" element={<Goods/>}  />
            </Routes>
        </BrowserRouter>
        
    

)

}