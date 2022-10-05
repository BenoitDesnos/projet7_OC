/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Carrousel from "./../components/Carrousel";
import starFull from "../assets/VectorStarFull.svg";
import starEmpty from "../assets/VectorStarEmpty.svg";

const Lodging = ({ lodgings }) => {
  const { id } = useParams();

  const [pictures, setPictures] = useState([]);
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [rating, setRating] = useState(0);
  const [hostName, setHostName] = useState("");
  const [hostPicture, setHostPicture] = useState("");

  const rangeStars = [1, 2, 3, 4, 5];

  useEffect(() => {
    for (let i = 0; i < lodgings.length; i++) {
      if (lodgings[i].id.includes(id)) {
        setPictures(lodgings[i].pictures);
        setTags(lodgings[i].tags);
        setTitle(lodgings[i].title);
        setLocation(lodgings[i].location);
        setHostName(lodgings[i].host.name);
        setHostPicture(lodgings[i].host.picture);
        setRating(lodgings[i].rating);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const splittedName = hostName.split(" ");
  console.log(splittedName);

  return (
    <main className="lodging">
      <Navigation />
      <Carrousel
        clickCount={clickCount}
        pictures={pictures}
        setClickCount={setClickCount}
      />
      <div className="lodging__details">
        <h1 className="lodging__details__title">{title}</h1>
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
        <ul className="lodging__details__tags">
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
    </main>
  );
};

export default Lodging;
