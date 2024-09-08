import Cta from "../cta/Cta";
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
      <Footer />
    </div>
  );
};

export default Home;
