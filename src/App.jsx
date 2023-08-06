

import "./styles/App.css";

import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./components/shop-context";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/cart" element={<ShoppingCart/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
