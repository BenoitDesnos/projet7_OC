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
          <a href="http://localhost:3000/lodging">
            <img src={lodging.cover} alt={"miniature de " + lodging.title} />
            <div className="thumbs__filter"></div>
            <h3>{lodging.title}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Gallery;
