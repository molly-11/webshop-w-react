function CreateProductCard(props) {
  const plants = props.plants;

  return (
    <>
      {plants.map((plant) => (
        <div className="productCard" key={plant.id}>
          <img src={plant.img} alt="Plant image" />
          <div>
            <p className="productName">{plant.name}</p>
            <p className="productDescr"> {plant.description}</p>
            <p className="productPrice">{plant.price}</p>
            <p className="productCategory">{plant.type}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CreateProductCard;
