import { createContext, useState } from "react";
import { PRODUCTS } from "../productlist";

/*const fetchProduts = () => {
  fetch("data/plants.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((pl) => {
        products.push(pl);
      });
      console.log(products);
    });
};*/

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const defaultProdList = () => {
  let allProds = [];
  PRODUCTS.map((prod) => {
    allProds.push(prod);
  });
  return allProds;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [products, setProducts] = useState(defaultProdList());

  const filterProducts = (value) => {
    let filteredProds = [];
    if (value === "all") {
      filteredProds = defaultProdList();
    } else {
      PRODUCTS.map((prod) => {
        if (prod.type === value) {
          filteredProds.push(prod);
        }
      });
    }

    setProducts(filteredProds);
  };

  const searchProduct = (value) => {
    let searchedProds = [];
    PRODUCTS.map((prod) => {
      if (prod.name.toLowerCase().includes(value.toLowerCase())) {
        searchedProds.push(prod);
        
      }
    });
    setProducts(searchedProds);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    removeFromCart,
    getTotalAmount,
    filterProducts,
    searchProduct,
  };

  //console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
