import "../styles/LandingPage.css"

function CreateLandingPage() {
  return (
    <div id="landingDiv">
      
      <div id="landingLeft">
        <img src="./assets/images/bedroom.png" alt="Plants in the livingroom" />
      </div>
      <div id="landingRight">
        <img src="./assets/images/chair.jpg" alt="Indoor palmtree" />
        <img src="./assets/logo/logo.svg" alt="logo" id="mainLogo"/>
        
      </div>
    </div>
  );
}

export default CreateLandingPage;