import collapseArrow from "../assets/VectorCollapseArrow.svg";

function Collapse({ header, content }) {
  return (
    <div className="collapse__container">
      <img
        src={collapseArrow}
        alt="collapse toggle"
        className="collapse__arrow"
      />
      <span className="collapse__header">{header}</span>
      <ul className="collapse__content">
        {typeof content === "string" ? (
          <li className="collapse__content__element">{content}</li>
        ) : (
          content.map((element, index) => (
            <li
              className="collapse__content__element list"
              key={element + index}
            >
              {element}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Collapse;
