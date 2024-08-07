import images from "../constants/data";

const Library = () => {
  return (
    <section className="library none1" id="library">
      {/* Библиотека оценщика */}
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
                  <img src={images.home} alt="Главная" className="library__info" />
                  Главная
                </a>
              </li>
              <li className="breadcrumbs-center">
                <img src={images.chevronRight} alt="Далее" />
              </li>
              <li>
                <a href="#!">Библиотека оценщика</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="block">
          <div className="library__title">
            <h2 className="title-24">Библиотека оценщика</h2>
            <p className="subtitle">
              Мониторинги, аналитические отчеты, материалы докладов и
              выступлений
            </p>
            <div className="title-line"></div>
          </div>
          <div className="library__filters">
            <img src={images.filters} alt="Фильтры" />
          </div>

          <div className="library__cards">
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--0">
                <ul>
                  <li className="card__title">Новое</li>
                  <li>
                    <a href="#!">Методическое пособие</a>
                  </li>
                  <li>
                    <a href="#!">Сборник корректировок</a>
                  </li>
                  <li>
                    <a href="#!">Аналитический отчет</a>
                  </li>
                  <li>
                    <a href="#!">Квалэкзамен Бизнес</a>
                  </li>
                  <li>
                    <a href="#!">Приказ</a>
                  </li>
                  <li>
                    <a href="#!">ФСО</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img0}
                alt="Новое"
                className="library__card-img"
              />
            </div>

            <div className="library__card">
              <div className="library__card-text card-bg card-bg--1">
                <ul>
                  <li className="card__title">Мои документы</li>
                  <li>
                    <a href="#!">Федеральный закон</a>
                  </li>
                  <li>
                    <a href="#!">Квалэкзамен Движимое</a>
                  </li>
                  <li>
                    <a href="#!">Жилые комплексы новые</a>
                  </li>
                  <li>
                    <a href="#!">Долгострои</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img1}
                alt="Мои документы"
                className="library__card-img"
              />
            </div>

            <div className="library__card">
              <div className="library__card-text card-bg card-bg--2">
                <ul>
                  <li className="card__title">Квалификационный экзамен</li>
                  <li>
                    <a href="#!">Недвижимость</a>
                  </li>
                  <li>
                    <a href="#!">Движимое</a>
                  </li>
                  <li>
                    <a href="#!">Бизнес</a>
                  </li>
                  <li>
                    <a href="#!">Kvalexam.ru</a>
                  </li>
                  <li>
                    <a href="#!">ФБУ "ФРЦ"</a>
                  </li>
                  <li>
                    <a href="#!">pprog.ru/examination</a>
                  </li>
                </ul>
              </div>
              <a href="#!" className="video__link">
                <img
                  src={images.play}
                  alt="Запустить видео"
                  className="video__link--icon"
                />
                <img
                  src={images.img2}
                  alt="Квалификационный экзамен"
                  className="library__card-img video__img"
                />
              </a>
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--3">
                <ul>
                  <li className="card__title">Законодательство</li>
                  <li>
                    <a href="#!">ФСО</a>
                  </li>
                  <li>
                    <a href="#!">Приказы</a>
                  </li>
                  <li>
                    <a href="#!">Федеральные законы</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img3}
                alt="Законодательство"
                className="library__card-img"
              />
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--4">
                <ul>
                  <li className="card__title">Аналитика</li>
                  <li>
                    <a href="#!">Сборник аналитических рыночных данных</a>
                  </li>
                  <li>
                    <a href="#!">Аналитический отчет</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img4}
                alt="Аналитика"
                className="library__card-img"
              />
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--5">
                <ul>
                  <li className="card__title">Исследования рынка</li>
                  <li>
                    <a href="#!">Сборник корректировок</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img5}
                alt="Исследования рынка"
                className="library__card-img"
              />
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--6">
                <ul>
                  <li className="card__title">Образование</li>
                  <li>
                    <a href="#!">Курсы</a>
                  </li>
                  <li>
                    <a href="#!">Литература</a>
                  </li>
                  <li>
                    <a href="#!">ВУЗы</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img6}
                alt="Образование"
                className="library__card-img"
              />
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--7">
                <ul>
                  <li className="card__title">Мероприятия</li>
                  <li>
                    <a href="#!">Конференция</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img7}
                alt="Мероприятия"
                className="library__card-img"
              />
            </div>
            <div className="library__card">
              <div className="library__card-text card-bg card-bg--8">
                <ul>
                  <li className="card__title">Статьи и доклады</li>
                  <li>
                    <a href="#!">Статья</a>
                  </li>
                  <li>
                    <a href="#!">Доклад</a>
                  </li>
                </ul>
              </div>
              <img
                src={images.img8}
                alt="Статьи и доклады"
                className="library__card-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;
