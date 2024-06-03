import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import Stat from "../components/home/Stat";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Accordion />
      <Stat />
    </section>
  );
};

export default Home;
