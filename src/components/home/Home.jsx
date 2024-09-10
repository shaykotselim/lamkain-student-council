import Cta from "../cta/Cta";
import Gallery from "../gallery/Gallery";
import Glary from "../gallery/Gallery";
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
      <Gallery/>
      <Footer />
    </div>
  );
};

export default Home;
