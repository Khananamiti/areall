import images from "./constants/data";
import React, {useState} from "react";

// import investigationList


const Investigation = () => {
  const [isActive, setIsActive] = useState("Рынок земли");

  const handleFilter = category =>{
    setIsActive(category)
  }
  return (
    <section className="investigation none1">
      {/* Исследования рынка недвижимости */}
      <div className="container">
        <div className="shop block block--w780">
          <div className="investigation__title">
            <h2 className="title-24">Исследования рынка недвижимости</h2>
            <p className="subtitle">
              Справочники оценщика, сборники корректировок, мониторинги рынка, аналитические отчеты
            </p>
            <div className="title-line"></div>
          </div>

          <div className="investigation-list">
          {
            ["Земля", "Офисы", "ИЖС", "ПСН", "Торговые помещения",  "Сборники корректировок",  "Анализ рынка"].map(category => (
              <button 
                className={`investigation-item ${isActive === category ? "active":""}`}
                key={category}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))
          }
            {/* <li class="investigation-item active" data-filter="earth">"Рынок земли</li> */}
          </div>
          
          <div className="investigation__documents">
          {/* АНАЛИТИЧЕСКИE ОТЧЕТЫ */}

          {/* AO "Рынок земли" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoEarth20234} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a
                  href="src/analytics/Анализ_рынка_земля_4Q_2023_БФ_ДЕМО.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Аналитический отчет "Рынок земли" города Омска. 4Q 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.10.2023</p>
                </div>
                <div className="document__buy">
                  {/* <button
                    type="button"
                    className="document__btn"
                    onClick={window.open('/qr-code.html')}
                  >
                    Купить
                  </button> */}
                </div>
              </div>
            </div>

            {/* AO "Рынок земли" 2024 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoEarth20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Аналитический отчет "Рынок земли" города Омска. 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "Офисная недвижимость" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoOffice20234} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a
                  href="src/analytics/Анализ_рынка_офисной_недвижимости_4_кв_2Q23_БФ_ДЭМО.doc"
                  className="document__link"
                  target="_blank"
                >
                  Аналитический отчет "Офисная недвижимость" города Омска. 4Q
                  2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>

              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.10.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "Офисная недвижимость" 2024 */}
            <div className="investigation__document none">
              <div className="document__img">
                <img src={images.aoOffice20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Аналитический отчет "Офисная недвижимость" города Омска. 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>

              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "Индивидуальная жилая застройка" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoIzhs20234} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a
                  href="src/analytics/Анализ_рынка_ИЖС_4Q_2023_БФ_ДЕМО.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Аналитический отчет "Индивидуальная жилая застройка" города
                  Омска. 4Q 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.10.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "Индивидуальная жилая застройка" 2024 */}
            <div className="investigation__document none">
              <div className="document__img">
                <img src={images.aoIzhs20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Аналитический отчет "Индивидуальная жилая застройка" города
                  Омска. 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "ПСН" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoPsn20234} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a
                  href="src/analytics/Анализ_рынка_ПСН_4кв._2023_БФ_ДЕМО.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Аналитический отчет "Производственно-складская недвижимость"
                  города Омска. 4Q 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.10.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "ПСН" 2024 */}
            <div className="investigation__document none">
              <div className="document__img">
                <img src={images.aoPsn20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Аналитический отчет "Производственно складская недвижимость"
                  города Омска. 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* AO "ТОН" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.aoTon20234} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Анализ рынка</span>
                <a
                  href="src/analytics/Анализ_рынка_4_кв_2023_г_Торговля_БФ_ДЕМО.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Аналитический отчет "Торговые помещения" города Омска. 4Q 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.10.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* СБОРНИКИ КОРРЕКТИРОВОК */}
            {/* "Квартиры" 2020 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iApartment2020} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Квартиры" 2020
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2020</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "Квартиры" 2023 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iApartment2023} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Квартиры" 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "Квартиры" 2024 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iApartment2024} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_КВАРТИРЫ_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Квартиры" 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "Гаражи" 2020 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iGarage2020} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Гаражи. Индивидуальные объекты
                  хранения" 2020
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2020</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "Гаражи" 2023 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iGarage2023} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Гаражи. Индивидуальные объекты
                  хранения" 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "Гаражи" 2024 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iGarage2024} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_ГАРАЖИ_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Гаражи. Индивидуальные объекты
                  хранения" 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "ИЖС" 2020 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iIzhs2020} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Индивидуальные жилые строения" 2020
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2020</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "ИЖС" 2024 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iIzhs20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_ИЖС_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Индивидуальные жилые строения" 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
            {/* "ПСН" 2020 */}

            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iPsn2020} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Производственно-складская недвижимость"
                  2020
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2020</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ПСН" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iPsn2023} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Производственно-складская недвижимость"
                  2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ПСН" 2024 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iPsn20241} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_ПСН_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Производственно-складская недвижимость"
                  2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ТОН" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iTon2023} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Торгово-офисная недвижимость" 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ТОН" 2024 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iTon2024} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_ТОН_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Торгово-офисная недвижимость" 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ЗУ" 2020 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iZu2020} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Земельные участки" 2020
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2020</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ЗУ" 2021 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iZu2021} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Земельные участки" 2021
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2021</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ЗУ" 2022 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iZu2022} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Земельные участки" 2022
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2022</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ЗУ" 2023 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iZu2023} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a href="#!" className="document__link" target="_blank">
                  Сборник корректировок "Земельные участки" 2023
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2023</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* "ЗУ" 2024 */}
            <div className="investigation__document">
              <div className="document__img">
                <img src={images.iZu2024} alt="Документ" />
              </div>
              <div className="document__info">
                <span className="document__type">Исследования рынка</span>
                <a
                  href="src/collection/Сборник_корректировок_ЗЕМЛЯ_2024_demo.pdf"
                  className="document__link"
                  target="_blank"
                >
                  Сборник корректировок "Земельные участки" 2024
                </a>
                <div className="document__company">
                  <span>Подготовлен:</span>
                  <p>НП "Евразийский Союз Экспертов</p>
                </div>
              </div>
              <div className="document__result">
                <div className="document__price">5000 руб.</div>
                <div className="document__data">
                  <p>ОПУБЛИКОВАН:</p>
                  <p>01.01.2024</p>
                </div>
                <div className="document__buy">
                  <button
                    type="button"
                    className="document__btn"
                    onClick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Виджеты */}
        <div className="widgets">
        {/* НП ЕСЭ */}
          <div className="npese block block--w380 block--fix1">
            <div className="npese__title">
              <h2 className="title-16">НП “Евразийский союз экспертов”</h2>
              <p className="subtitle">Некоммерческое партнерство</p>
              <div className="title-line"></div>
            </div>

            <div className="npese__content">
              <div className="npese__content-img">
                <img
                  src={images.wNpese}
                  alt="НП “Евразийский союз экспертов”"
                />
                <p>
                  Организация, объединяющая специалистов, работающих в сфере
                  экспертных исследований и судебной экспертизы.
                </p>
              </div>
              <div className="npese__content-text">
                <p>
                  Основная цель НП ЕСЭ – содействие членам партнерства в
                  осуществлении профессиональной деятельности с целью развития и
                  совершенствования направления независимых экспертных
                  исследований и негосударственной судебной экспертизы в
                  Российской Федерации.
                </p>
                <p>
                  На 20 мая 2014 года количество членов НП ЕСЭ составляет более
                  30 человек. Все эксперты имеют высшее образование по
                  специальностям, позволяющее им выступать в качестве судебных
                  экспертов в соответствии с действующим законодательством.
                </p>
              </div>
            </div>
          </div>

          {/* Корректировка по местоположению */}
          <div className="correct block block--w380">
            <div className="correct__title">
              <h2 className="title-16">Корректировка по местоположению</h2>
              <p className="subtitle">Для определения стоимости квартиры</p>
              <div className="title-line"></div>
            </div>

            <div className="correct__content">
              <div className="correct__content-img">
                <img
                  src={images.wCorrect}
                  alt="Корректировка по местоположению - график"
                />
              </div>
            </div>
          </div>

          {/* Ценовое зонирование */}
          <div className="price-zone block block--w380 block--fix1">
            <div className="price-zone__title">
              <h2 className="title-16">Ценовое зонирование</h2>
              <p className="subtitle">
                Территориально-экономическое зонирование города Омск
              </p>
              <div className="title-line"></div>
            </div>
            <div className="price-zone__content">
              <div className="price-zone__content-img">
                <img
                  src={images.wPriceZone}
                  alt="Ценовое зонирование - карта"
                />
              </div>
            </div>
          </div>

          {/* Градостроительный план */}
          <div className="grad-plan block block--w380 block--fix1">
            <div className="grad-plan__title">
              <h2 className="title-16">Градостроительный план</h2>
              <p className="subtitle">Градостроительный план города Омск</p>
              <div className="title-line"></div>
            </div>
            <div className="grad-plan__content">
              <div className="grad-plan__content-img">
                <img
                  src={images.wGradPlan}
                  alt="Градостроительный план - карта"
                />
              </div>
            </div>
          </div>

          {/* Публичная кадастровая карта */}
          <div className="cad-map block block--w380 block--fix1">
            <div className="cad-map__title">
              <h2 className="title-16">Публичная кадастровая карта</h2>
              <p className="subtitle">
                ГИС аналитика рынка недвижимости <br />
                Ценовое зонирование
                <br />
                Мониторинг кадастровой оценки
              </p>
              <div className="title-line"></div>
            </div>
            <div className="cad-map__content">
              <p className="subtitle">
                Публичная кадастровая карта: Новосибирская область
              </p>
              <div className="cad-map__content-img">
                <img
                  src={images.wCadMap}
                  alt="Публичная кадастровая карта - карта"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investigation;
