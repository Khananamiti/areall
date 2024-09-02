import images from "../constants/data";

const Location = () => {
  return (
    <>
      <div className="library__top">
        <div className="library__top-row">
          <div className="library__geo">
            <a href="#!" className="library__info">
              <img src={images.geo} alt="Ваш город: " />
              Омск
            </a>
          </div>
          <div className="library__breadcrumbs">
            <ul className="library__breadcrumbs-list">
              <li>
                <a href="#!">
                  <img
                    src={images.home}
                    alt="Главная"
                    className="library__info"
                  />
                  Главная
                </a>
              </li>
              {/* <li className="breadcrumbs-center">
                <img src={images.chevronRight} alt="Далее" />
              </li>
              <li>
                <a href="#!">Библиотека оценщика</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
