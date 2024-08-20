import images from "../constants/data";

const Research = () => {
  return (
    <>
      {/* Поиск для профессионалов */}
      <section className="research none1">
        <div className="container">
          <div className="block block--shadow">
            <div className="research__title">
              <h2 className="title-24">
                Поиск недвижимости для профессионалов
              </h2>
              <p className="subtitle">Народный кадастр недвижимости</p>
              <div className="title-line"></div>
            </div>
            <div className="research__filters">
              <img src={images.rfilters} alt="Фильтры для профессионалов" />
            </div>
            <img src={images.catalog} alt="Каталог документов" />

            <div className="research__cards">
              <div className="research__card">
                <div className="research__card-text card-bg card-bg--0">
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
                  src={images.rimg0}
                  alt="Новое"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--1">
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
                  src={images.rimg1}
                  alt="Мои документы"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--2">
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
                <img
                  src={images.rimg2}
                  alt="Квалификационный экзамен"
                  className="research__card-img video__img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--3">
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
                  src={images.rimg3}
                  alt="Законодательство"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--4">
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
                  src={images.rimg4}
                  alt="Аналитика"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--5">
                  <ul>
                    <li className="card__title">Исследования рынка</li>
                    <li>
                      <a href="#!">Сборник корректировок</a>
                    </li>
                  </ul>
                </div>
                <img
                  src={images.rimg5}
                  alt="Исследования рынка"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--6">
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
                  src={images.rimg6}
                  alt="Образование"
                  className="research__card-img"
                />
              </div>

              <div className="research__card">
                <div className="research__card-text card-bg card-bg--7">
                  <ul>
                    <li className="card__title">Мероприятия</li>
                    <li>
                      <a href="#!">Конференция</a>
                    </li>
                  </ul>
                </div>
                <img
                  src={images.rimg7}
                  alt="Мероприятия"
                  className="research__card-img"
                />
              </div>
              
              <div className="research__card">
                <div className="research__card-text card-bg card-bg--8">
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
                  src={images.rimg8}
                  alt="Статьи и доклады"
                  className="research__card-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
