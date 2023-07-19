import { Link } from "react-router-dom";
import { PRODUCTS } from "../productlist";
import "../styles/Trending.css"


function TrendingProducts() {
  const plants = PRODUCTS;

  return (
    <div id="trendingSection">
      <h1>Trending products</h1>
      <div id="trending">
      <div className="productCard" key={plants[3].id}>
        <img src={plants[3].img} alt="Plant image" />
        <div className="productData">
          <p className="productName">{plants[3].name}</p>
          <p className="productPrice">$ {plants[3].price}</p>
          <div className="shop">
          <Link to={"/products"} className="shopNow">Shop now</Link>
          </div>
        </div>
      </div>

      <div className="productCard" key={plants[5].id}>
        <img src={plants[5].img} alt="Plant image" />
        <div className="productData">
          <p className="productName">{plants[5].name}</p>
          <p className="productPrice">$ {plants[5].price}</p>
          <div className="shop">
          <Link to={"/products"} className="shopNow">Shop now</Link>
          </div>
        </div>
      </div>
      
      <div className="productCard" key={plants[6].id}>
        <img src={plants[6].img} alt="Plant image" />
        <div className="productData">
          <p className="productName">{plants[6].name}</p>
          <p className="productPrice">$ {plants[6].price}</p>
          <div className="shop">
            <Link to={"/products"} className="shopNow">Shop now</Link>
          </div>
        </div>
      </div>

      </div>
      
    </div>
  );
}

export default TrendingProducts;
