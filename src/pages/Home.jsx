import About from "../components/About";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import CreateLandingPage from "../components/LandinPage";
import Navbar from "../components/Navbar";
import TrendingProducts from "../components/TrendingProducts";

function Home() {
  return (
    <>
      <Navbar />
      <CreateLandingPage />
      <About/>
      <TrendingProducts/>
      <Articles/>
      <Footer/>
    </>
  );
}
export default Home;
