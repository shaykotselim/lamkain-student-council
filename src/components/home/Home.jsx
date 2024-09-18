import About from "../about/About";
import Contact from "../contact/Contact";
import CouncilRelevant from "../council-relevant/CouncilRelevant";
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
      <CouncilRelevant />
      <Introduction />
      <Cta />

      <About />

      <SportsGallery />
      <ReliefGallery />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
};

export default Home;
