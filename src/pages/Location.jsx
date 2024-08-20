import images from "../constants/data";

const Location = () => {
  return (
    <>
      <section className="location">
        <div className="location__top">
          <div className="location__top-row">
            <div className="location__geo">
              <a href="#!" className="location__info">
                <img src={images.geo} alt="Ваш город: " />
                Омск
              </a>
            </div>
            <div className="location__breadcrumbs">
              <ul className="location__breadcrumbs-list">
                <li>
                  <a href="#!">
                    <img
                      src={images.home}
                      alt="Главная"
                      className="location__info"
                    />
                    Главная
                  </a>
                </li>
                {/* <li className="location__breadcrumbs-center">
                  <img src={images.chevronRight} alt="Далее" />
                </li>
                <li>
                  <a href="#!">Библиотека оценщика</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
