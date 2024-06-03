import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import Pricing from "../components/home/Pricing";
import Stat from "../components/home/Stat";
import Testimonials from "../components/home/Testimonials";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <LoadingSpinner />;
  return (
    <section>
      <Banner />
      <Stat />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Accordion />
    </section>
  );
};

export default Home;
