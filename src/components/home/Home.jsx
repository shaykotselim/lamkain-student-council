import About from "../about/About";
import Cta from "../cta/Cta";
import ReliefGallery from "../gallery/ReliefGallery";
import SportsGallery from "../gallery/SportsGallery";
import Hero from "../hero/Hero";
import Introduction from "../introduction/Introduction";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Introduction />
      <Cta/>
      <About/>
      <SportsGallery/>
      <ReliefGallery/>
     
      <Footer />
    </div>
  );
};

export default Home;
