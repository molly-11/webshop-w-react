import "../styles/Home.css";

function Articles() {
  return (
    <div id="articleSection">
      {" "}
      <h1>Read our plant care tips</h1>
      <div id="articleWrapper">
        <img src="./assets/images/care1.jpg" alt="Watering" />
        <div id="articles">
          <h3>Watering indoor plants</h3>
          <p id="articleText">
            These are house plant care instructions (highly important) that a
            plant cannot live without, or get it wrong and you’ll be treating a
            damaged plant; even worse it will die. Watering is one of those
            instructions. <br />
            <br />
            Providing too much water for certain plants (e.g. succulents) can
            easily kill them, while not providing enough for others will prevent
            the plant from growing, causing leaves to drop and flowers to fade
            quickly. <br />
            <br />
            The environment and time of the year play an important role in how
            much is the right amount for your plant.
          </p>
          <button> Click for more </button>
        </div>
        
      </div>
      
    </div>
  );
}

export default Articles;
