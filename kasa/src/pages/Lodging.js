import Navigation from "../components/Navigation";
import Carrousel from "./../components/Carrousel";

const Lodging = ({ lodgings }) => {
  console.log(lodgings);
  return (
    <main>
      <Navigation />
      <Carrousel lodgings={lodgings} />
    </main>
  );
};

export default Lodging;
