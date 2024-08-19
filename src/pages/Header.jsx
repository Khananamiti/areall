import images from "../constants/data";
import { useState } from "react";
import Registration from "./Registration";
// import { Route, Router } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // при вызове функции handleToggle, isActive переходит в противоположное состояние
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const regClick = () => {
    return alert("Функция находится в разработке");
  };

  const authClick = () => {
    return alert("Функция находится в разработке");
  };

  return (
    <>
      <header className="header none1">
        {/* Реклама */}
        <div className="header__advertising">
          <div className="container container--nobottom">
            <img src={images.advertising} alt="Реклама" />
          </div>
        </div>

        <div className="header__top">
          {/* Выравнивание элементов в ряд и по краям */}
          <div className="header__top-row">
            <div className="header__logo item1">
              <a href="#!">
                <img
                  src={images.logo}
                  alt="Areall | Продвижение недвижимости"
                />
              </a>
            </div>

            <div className="header__center item2">
              <h1 className="header__title">
                Аналитические сервисы рынка недвижимости
              </h1>

              <div className="header__nav">
                <nav className={isActive ? "nav active" : "nav"}>
                  <ul className="nav__list">
                    <li
                      className="item"
                      onClick={() => scrollToSection("library")}
                    >
                      Библиотека оценщика
                    </li>
                    <li
                      className="item"
                      onClick={() => scrollToSection("cadastre")}
                    >
                      Народный кадастр
                    </li>
                    <li
                      className="item"
                      onClick={() => scrollToSection("realEstateMarket")}
                    >
                      Рынок недвижимости
                    </li>
                    <li
                      className="item"
                      onClick={() => scrollToSection("analysis")}
                    >
                      Аналитика
                    </li>
                    <li
                      className="item"
                      onClick={() => scrollToSection("investigation")}
                    >
                      Исследования
                    </li>
                    <li className="item">
                      <img src={images.more} alt="Иконка 'еще'" />
                      Еще
                      {/* Пока скрыт выпадающий список */}
                      <ul className="nav-more-dropdown none">
                        <li
                          className="item"
                          onClick={() => scrollToSection("education")}
                        >
                          Образование
                        </li>
                        <li
                          className="item"
                          onClick={() => scrollToSection("glossary")}
                        >
                          Глоссарий
                        </li>
                        <li
                          className="item"
                          onClick={() => scrollToSection("events")}
                        >
                          Мероприятия
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                className={
                  isActive ? "header__nav-btn active" : "header__nav-btn"
                }
                onClick={handleToggle}
              >
                <button className="nav-icon-btn">
                  <span className="nav-icon"></span>
                </button>
              </div>
            </div>

            <div className="header__contact item3">
              <div className="header__auth none1">
                <button
                  type="button"
                  className="header__auth-login"
                  onClick={authClick}
                >
                  <img src={images.logIn} alt="Войти" />
                  Войти
                </button>
                <button
                  type="button"
                  className="header__auth-reg"
                  onClick={regClick}
                >
                  Зарегистрироваться
                </button>
              </div>

              {/* Реализовать копирование при нажатии на текст */}
              <div className="header__cont-text">
                <div className="text-right">
                  <a
                    href="tel:+79136236787"
                    className=""
                    title="Позвонить по телефону"
                  >
                    +7 (913) 623-67-87
                  </a>
                </div>
                <div className="text-right">
                  <a
                    href="mailto:areall@mail.ru"
                    className=""
                    title="Написать на почту"
                  >
                    areall@mail.ru
                  </a>
                </div>
              </div>

              <div className="header__contact-social">
                <div className="header__cont-icons">
                  <a href="tel:+79136236787" title="Позвонить по телефону">
                    <img src={images.phone} alt="phone" />
                  </a>
                  <a href="mailto:areall@mail.ru" title="Написать на почту">
                    <img src={images.mail} alt="mail" />
                  </a>
                </div>

                {/* <!-- Реализовать  переход в соответствующее приложение при нажатии на текст --> */}
                <div className="header__cont-messengers">
                  <a
                    href="https://t.me/+79136236787"
                    target="_blank"
                    title="Написать в Telegram"
                  >
                    <img src={images.telegram} alt="telegram" />
                  </a>
                  <a
                    href="whatsapp://send?phone=+79136236787&text=Здравствуйте! Пишу вам с сайта Areall.ru"
                    title="Написать в Whatsapp"
                  >
                    <img src={images.whatsapp} alt="whatsapp" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
