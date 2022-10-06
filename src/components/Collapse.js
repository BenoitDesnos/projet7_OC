import collapseArrow from "../assets/VectorCollapseArrow.svg";
import { useState } from "react";

function Collapse({ header, content, addClass, addId }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapses() {
    var collapseCOntainer = document.getElementById(addId);
    // default height in _collapse.scss = 50
    if (collapseCOntainer.clientHeight !== 50) {
      collapseCOntainer.style.height = 50 + "px";
      setIsOpen(false);
    } else {
      var collapsesContent = document.querySelector(`#\\3${addId} > ul`);

      collapseCOntainer.style.height =
        collapsesContent.clientHeight +
        collapseCOntainer.clientHeight +
        60 + // margin top bottom .collapse__content in .collapse.scss
        "px";

      return setIsOpen(true);
    }
  }

  return isOpen ? (
    <div className={"collapse__container " + addClass} id={addId}>
      <img
        src={collapseArrow}
        alt="collapse toggle"
        className="collapse__arrow"
        onClick={() => toggleCollapses()}
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
  ) : (
    <div
      className={" collapse__container collapse__container--closed " + addClass}
      id={addId}
    >
      <img
        src={collapseArrow}
        alt="collapse toggle"
        className="collapse__arrow collapse__arrow--closed"
        onClick={() => toggleCollapses()}
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
