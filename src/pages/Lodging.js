/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Carrousel from "./../components/Carrousel";
import starFull from "../assets/VectorStarFull.svg";
import starEmpty from "../assets/VectorStarEmpty.svg";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Lodging = ({ lodgings }) => {
  const { id } = useParams();

  const [pictures, setPictures] = useState([]);
  const [tags, setTags] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostPicture, setHostPicture] = useState("");
  const [description, setDescription] = useState("");

  const splittedName = hostName.split(" ");
  const rangeStars = [1, 2, 3, 4, 5];

  useEffect(() => {
    for (let i = 0; i < lodgings.length; i++) {
      if (lodgings[i].id.includes(id)) {
        setPictures(lodgings[i].pictures);
        setTags(lodgings[i].tags);
        setEquipments(lodgings[i].equipments);
        setRating(lodgings[i].rating);
        setTitle(lodgings[i].title);
        setLocation(lodgings[i].location);
        setHostName(lodgings[i].host.name);
        setHostPicture(lodgings[i].host.picture);
        setDescription(lodgings[i].description);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="lodging ">
      <Navigation />
      <Carrousel
        clickCount={clickCount}
        pictures={pictures}
        setClickCount={setClickCount}
      />
      <div className="lodging__details max__width">
        <h1 className="lodging__details__title size2">{title}</h1>
        <p className="lodging__details__adress">{location}</p>
        <div className="lodging__details__host">
          <p className="lodging__details__host__name">
            {splittedName[0]} <br /> {splittedName[1]}
          </p>
          <img
            src={hostPicture}
            alt="host photo"
            className="lodging__details__host__picture"
          ></img>
        </div>
        <ul className="lodging__details__tags sizeb">
          {tags.map((tag, index) => (
            <li key={tag + index}>{tag}</li>
          ))}
        </ul>
        <ul className="lodging__details__stars">
          {rangeStars.map((rangeElem, index) =>
            rating >= rangeElem ? (
              <li key={rangeElem + index}>
                <img src={starFull} alt="star full" />
              </li>
            ) : (
              <li key={rangeElem + index}>
                <img src={starEmpty} alt="star empty" />
              </li>
            )
          )}
        </ul>
        <ul></ul>
      </div>
      <div className="lodging__collapses max__width">
        <Collapse
          header="Description"
          content={description}
          addClass={null}
          addId="1"
        />
        <Collapse
          header="Equipements"
          content={equipments}
          addClass={null}
          addId="2"
        />
      </div>
      <Footer />
    </main>
  );
};

export default Lodging;
