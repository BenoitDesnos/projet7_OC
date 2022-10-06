import collapseArrow from "../assets/VectorCollapseArrow.svg";
import { useState } from "react";

function Collapse({ header, content, addClass, addId }) {
  const [isOpen, setIsOpen] = useState(false);

  // cette fonction à pour seul utilité de pouvoir lancer une transition sur la
  function toggleCollapses() {
    var collapseContainer = document.getElementById(addId);
    var collapseHeader = document.querySelector(".collapse__header");
    console.log(collapseHeader);
    // default height in _collapse.scss = 50
    if (collapseContainer.clientHeight !== collapseHeader.clientHeight) {
      collapseContainer.style.height = collapseHeader.clientHeight + "px";
      setIsOpen(false);
    } else {
      var collapsesContent = document.querySelector(`#\\3${addId} > ul`);

      collapseContainer.style.height =
        collapsesContent.clientHeight +
        collapseContainer.clientHeight +
        60 + // margin top bottom .collapse__content in .collapse.scss
        "px";

      setIsOpen(true);
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

      <div className="collapse__header">
        <p>{header}</p>
      </div>

      <ul className="collapse__content">
        {typeof content === "string" ? (
          <li className="collapse__content__element sizep">{content}</li>
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
      <div className="collapse__header">
        <p>{header}</p>
      </div>
      <ul className="collapse__content">
        {typeof content === "string" ? (
          <li className="collapse__content__element sizep">{content}</li>
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
