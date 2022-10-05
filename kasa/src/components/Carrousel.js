import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import arrow from "../assets/Vector gauche.svg";

function Carrousel({ lodgings }) {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    for (let i = 0; i < lodgings.length; i++) {
      if (lodgings[i].id.includes(id)) {
        setPictures(lodgings[i].pictures);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carrousel">
      <img
        src={arrow}
        alt="clic gauche"
        id="leftClick"
        onClick={() => {
          clickCount <= 0
            ? setClickCount(pictures.length - 1)
            : setClickCount(clickCount - 1);

          console.log(clickCount);
        }}
      />
      <img
        src={pictures[clickCount]}
        alt="Images du carrousel"
        className="pictures"
      />
      <img
        src={arrow}
        alt="clic gauche"
        id="rightClick"
        onClick={() => {
          clickCount >= pictures.length - 1
            ? setClickCount(0)
            : setClickCount(clickCount + 1);
          console.log(clickCount);
          console.log(pictures);
        }}
      />
    </div>
  );
}

export default Carrousel;
