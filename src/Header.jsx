import React from "react";

const Header = () => {
  return (
    <header className="header none1">

      {/* <!-- Реклама --> */}
      <div className="header__advertising">
        <div className="container">
          <img src="./img/header/advertising.jpg" alt="Реклама" />
        </div>
      </div>

      <div className="header__top">
        
        {/* <!-- Выравнивание элементов в ряд и по краям --> */}
        <div className="header__top-row">
          <div className="header__logo item1">
            <a href="#!">
              <img
                src="./img/LOGO.svg"
                alt="Areall | Продвижение недвижимости"
              />
            </a>
          </div>

          <div className="header__center item2">
            <h1 className="header__title">
              Аналитические сервисы рынка недвижимости
            </h1>

            <div className="header__nav">
              <nav className="nav">
                <ul className="nav__list">
                  <li>
                    <a href="#!" className="active">
                      Библиотека оценщика
                    </a>
                  </li>
                  <li>
                    <a href="#!">Народный кадастр</a>
                  </li>
                  <li>
                    <a href="#!">Рынок недвижимости</a>
                  </li>
                  <li>
                    <a href="#!">Аналитика</a>
                  </li>
                  <li>
                    <a href="#!">Исследования</a>
                  </li>
                  <li>
                    <a href="#!" className="info info--more">
                      Еще
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__nav-btn">
              <button className="nav-icon-btn">
                <span className="nav-icon"></span>
              </button>
            </div>
          </div>

          <div className="header__contact item3">
            <div className="header__auth none1">
              <button type="button" className="header__auth-login">
                <img src="img/header/log-in.svg" alt="Войти" />
                Войти
              </button>
              <button type="button" className="header__auth-reg">
                Зарегистрироваться
              </button>
            </div>

            {/* Реализовать копирование при нажатии на текст */}
            <div className="header__cont-text">
              <div className="text-right">
                <a href="tel:+79136236787" className="">
                  +7 (913) 623-67-87
                </a>
              </div>
              <div className="text-right">
                <a href="mailto:areall@mail.ru" className="">
                  areall@mail.ru
                </a>
              </div>
            </div>

            <div className="header__contact-social">
              <div className="header__cont-icons">
                <a href="tel:+79136236787">
                  <img src="./img/socials/phone.svg" alt="phone" />
                </a>
                <a href="mailto:areall@mail.ru">
                  <img src="./img/socials/mail.svg" alt="mail" />
                </a>
              </div>

              {/* <!-- Реализовать  переход в соответствующее приложение при нажатии на текст --> */}
              <div className="header__cont-messengers">
                <a href="#!">
                  <img src="./img/socials/telegram.svg" alt="telegram" />
                </a>
                <a href="#!">
                  <img src="./img/socials/whatsapp.svg" alt="whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
