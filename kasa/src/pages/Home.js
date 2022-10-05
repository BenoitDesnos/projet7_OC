import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Navigation from "../components/Navigation";

const Home = ({ lodgings }) => {
  return (
    <main>
      <Navigation />
      <Banner />
      <Gallery lodgings={lodgings} />
    </main>
  );
};

export default Home;
