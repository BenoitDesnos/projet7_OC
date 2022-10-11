// used in Home.js
function Banner() {
  return (
    <div className="banner__container max__width">
      <h2 className="size1">
        Chez vous,{window.innerWidth < 576 && <br />} partout et ailleurs
      </h2>
      <div className="banner__filter"></div>
    </div>
  );
}

export default Banner;
