

const Investigation = () => {
  return (
    <section className="investigation none1">
      {/* Исследования рынка недвижимости */}
      <div className="container">
        <div className="shop block block--w780">
          <div className="investigation__title">
            <h2 className="title-24">Исследования рынка недвижимости</h2>
            <p className="subtitle">
              Справочники оценщика, сборники корректировок, мониторинги рынка,
              аналитические отчеты
            </p>
            <div className="title-line"></div>
          </div>
          <div className="investigation__documents">
            {/* АНАЛИТИЧЕСКИE ОТЧЕТЫ */}

            <div className="investigation__document">
              {/* AO "Рынок земли" 2023 */}
              <div className="document__img">
                <img src="./img/analysis/ao-earth2023-4.jpg" alt="Документ" />
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
                  <button
                    type="button"
                    className="document__btn"
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document none">
              {/* AO "Рынок земли" 2024 */}
              <div className="document__img">
                <img src="./img/analysis/ao-earth2024-1.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* AO "Офисная недвижимость" 2023 */}
              <div className="document__img">
                <img src="./img/analysis/ao-office2023-4.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document none">
              {/* AO "Офисная недвижимость" 2024 */}
              <div className="document__img">
                <img src="./img/analysis/ao-office2024-1.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* AO "Индивидуальная жилая застройка" 2023 */}
              <div className="document__img">
                <img src="./img/analysis/ao-izhs2023-4.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document none">
              {/* AO "Индивидуальная жилая застройка" 2024 */}
              <div className="document__img">
                <img src="./img/analysis/ao-izhs2024-1.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* AO "ПСН" 2023 */}
              <div className="document__img">
                <img src="./img/analysis/ao-psn2023-4.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document none">
              {/* AO "ПСН" 2024 */}
              <div className="document__img">
                <img src="./img/analysis/ao-psn2024.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* AO "ПСН" 2023 */}
              <div className="document__img">
                <img src="./img/analysis/ao-ton2023-4.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            {/* СБОРНИКИ КОРРЕКТИРОВОК */}
            <div className="investigation__document">
              {/* "Квартиры" 2020 */}
              <div className="document__img">
                <img
                  src="./img/investigation/apartment2020.jpg"
                  alt="Документ"
                />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "Квартиры" 2023 */}
              <div className="document__img">
                <img
                  src="./img/investigation/apartment2023.jpg"
                  alt="Документ"
                />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "Квартиры" 2024 */}
              <div className="document__img">
                <img
                  src="./img/investigation/apartment2024.jpg"
                  alt="Документ"
                />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "Гаражи" 2020 */}
              <div className="document__img">
                <img src="./img/investigation/garage2020.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "Гаражи" 2023 */}
              <div className="document__img">
                <img src="./img/investigation/garage2023.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "Гаражи" 2024 */}
              <div className="document__img">
                <img src="./img/investigation/garage2024.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ИЖС" 2020 */}
              <div className="document__img">
                <img src="./img/investigation/izhs2020.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ИЖС" 2024 */}
              <div className="document__img">
                <img src="./img/investigation/izhs2024-1.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ПСН" 2020 */}
              <div className="document__img">
                <img src="./img/investigation/psn2020.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ПСН" 2023 */}
              <div className="document__img">
                <img src="./img/investigation/psn2023.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ПСН" 2024 */}
              <div className="document__img">
                <img src="./img/investigation/psn2024-1.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ТОН" 2023 */}
              <div className="document__img">
                <img src="./img/investigation/ton2023.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ТОН" 2024 */}
              <div className="document__img">
                <img src="./img/investigation/ton2024.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ЗУ" 2020 */}
              <div className="document__img">
                <img src="./img/investigation/zu2020.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ЗУ" 2021 */}
              <div className="document__img">
                <img src="./img/investigation/zu2021.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ЗУ" 2022 */}
              <div className="document__img">
                <img src="./img/investigation/zu2022.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ЗУ" 2023 */}
              <div className="document__img">
                <img src="./img/investigation/zu2023.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>

            <div className="investigation__document">
              {/* "ЗУ" 2024 */}
              <div className="document__img">
                <img src="./img/investigation/zu2024.jpg" alt="Документ" />
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
                    onclick="window.open('/qr-code.html')"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="widgets">
          <div className="npese block block--w380 block--fix1">
            {/* НП ЕСЭ  */}
            <div className="npese__title">
              <h2 className="title-16">НП “Евразийский союз экспертов”</h2>
              <p className="subtitle">Некоммерческое партнерство</p>
              <div className="title-line"></div>
            </div>

            <div className="npese__content">
              <div className="npese__content-img">
                <img
                  src="./img/widgets/npese.svg"
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

          <div className="correct block block--w380">
            {/* Корректировка по местоположению  */}
            <div className="correct__title">
              <h2 className="title-16">Корректировка по местоположению</h2>
              <p className="subtitle">Для определения стоимости квартиры</p>
              <div className="title-line"></div>
            </div>

            <div className="correct__content">
              <div className="correct__content-img">
                <img
                  src="./img/widgets/correct.png"
                  alt="Корректировка по местоположению - график"
                />
              </div>
            </div>
          </div>

          <div className="price-zone block block--w380 block--fix1">
            {/* Ценовое зонирование  */}
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
                  src="./img/widgets/price-zone.png"
                  alt="Ценовое зонирование - карта"
                />
              </div>
            </div>
          </div>

          <div className="grad-plan block block--w380 block--fix1">
            {/* Градостроительный план  */}
            <div className="grad-plan__title">
              <h2 className="title-16">Градостроительный план</h2>
              <p className="subtitle">Градостроительный план города Омск</p>
              <div className="title-line"></div>
            </div>
            <div className="grad-plan__content">
              <div className="grad-plan__content-img">
                <img
                  src="./img/widgets/grad-plan.png"
                  alt="Градостроительный план - карта"
                />
              </div>
            </div>
          </div>

          <div className="cad-map block block--w380 block--fix1">
            {/* Публичная кадастровая карта  */}
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
                  src="./img/widgets/cad-map.png"
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
