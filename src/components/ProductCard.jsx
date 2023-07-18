import"../styles/ProductCard.css"
function CreateProductCard(props) {
  const plants = props.plants;

  return (
    <div id="productsWrapper">
      {plants.map((plant) => (
        <div className="productCard" key={plant.id}>
          <img src={plant.img} alt="Plant image" />
          <div className="productData">
            <p className="productName">{plant.name}</p>
            <p className="productPrice">{plant.price}</p>
            <p className="productCategory">{plant.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateProductCard;
