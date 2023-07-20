import About from "../components/About";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
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
      <Articles/>
      <Footer/>
    </>
  );
}
export default Home;
