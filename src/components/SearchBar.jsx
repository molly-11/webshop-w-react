import { useContext } from "react";
import { ShopContext } from "../components/shop-context";
function SearchBar() {

  const { filterProducts , searchProduct} = useContext(ShopContext);

  return (
    <form>
      <input type="text" placeholder="Search product" onChange={(e)=>{e.preventDefault(); searchProduct(e.target.value)}} />
      <div id="filterDiv">
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("flowering")}}>flowering</button>
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("foliage")}}>foliage</button>
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("palm")}}>indoor palm tree</button>
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("cactus")}}>cactus</button>
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("accessories")}}>accessories</button>
        <button className="filterBtn" onClick={(e)=>{e.preventDefault(); filterProducts("all")}}>all</button>
      </div>

    </form>
  );
}

export default SearchBar;