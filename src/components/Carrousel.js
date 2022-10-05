import arrow from "../assets/Vector gauche.svg";

function Carrousel({ setClickCount, clickCount, pictures }) {
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
