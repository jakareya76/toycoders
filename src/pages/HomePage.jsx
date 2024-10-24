import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Features from "../components/Features";
import OurWorkProcess from "../components/OurWorkProcess";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Features />
      <OurWorkProcess />
      <Contact />
    </main>
  );
};

export default HomePage;
