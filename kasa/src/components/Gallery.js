import { useEffect, useState } from "react";
function Gallery() {
  const [lodgings, setLodging] = useState([]);

  useEffect(() => {
    fetch("data/logements.json")
      .then((res) => res.json())
      .then((lodgings) => setLodging(lodgings))
      .catch((err) =>
        console.log(
          "Une erreur s'est produite lors de la récupération des données ",
          err
        )
      );
  }, []);

  console.log(lodgings);

  return (
    <ul className="thumbs__container">
      {lodgings.map((lodging) => (
        <li key={lodging.id} className="thumbs">
          <img src={lodging.cover} alt={"miniature de " + lodging.title} />
        </li>
      ))}
    </ul>
  );
}
export default Gallery;
