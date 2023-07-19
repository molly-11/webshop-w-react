import About from "../components/About";
import CreateLandingPage from "../components/LandinPage";
import CreateNavbar from "../components/Navbar";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
  return (
    <>
      <CreateNavbar />
      <CreateLandingPage />
      <About/>
      <TrendingProducts/>
    </>
  );
}
export default Home;
