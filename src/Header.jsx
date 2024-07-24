import images from "./constants/data"
import { useState } from "react"


const Header = () => {
  const [isActive, setIsActive] = useState (false)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <header className="header none1">
      {/* Реклама */}
      <div className="header__advertising">
        <div className="container">
          <img src={images.advertising} alt="Реклама" />
        </div>
      </div>

      <div className="header__top">
        {/* Выравнивание элементов в ряд и по краям */}
        <div className="header__top-row">
          <div className="header__logo item1">
            <a href="#!">
              <img src={images.logo} alt="Areall | Продвижение недвижимости" />
            </a>
          </div>

          <div className="header__center item2">
            <h1 className="header__title">
              Аналитические сервисы рынка недвижимости
            </h1>

            <div className="header__nav">
              <nav className={isActive ? "nav active": "nav"}>
                <ul className="nav__list">
                  <li className="item">
                    <a href="#!" className="link active">
                      Библиотека оценщика
                    </a>
                  </li>
                  <li className="item">
                    Народный кадастр
                  </li>
                  <li className="item">
                    Рынок недвижимости
                  </li>
                  <li className="item">
                    Аналитика
                  </li>
                  <li className="item">
                    Исследования
                  </li>
                  <li>
                    
                    <a href="#!" className="info info--more">Еще                      
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={isActive ? "header__nav-btn active": "header__nav-btn"} onclick={handleToggle}>
              <button className="nav-icon-btn">
                <span className="nav-icon"></span>
              </button>
            </div>
          </div>

          <div className="header__contact item3">
            <div className="header__auth none1">
              <button type="button" className="header__auth-login">
                <img src={images.logIn} alt="Войти" />
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
                  <img src={images.phone} alt="phone" />
                </a>
                <a href="mailto:areall@mail.ru">
                  <img src={images.mail} alt="mail" />
                </a>
              </div>

              {/* <!-- Реализовать  переход в соответствующее приложение при нажатии на текст --> */}
              <div className="header__cont-messengers">
                <a href="#!">
                  <img src={images.telegram} alt="telegram" />
                </a>
                <a href="#!">
                  <img src={images.whatsapp} alt="whatsapp" />
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
