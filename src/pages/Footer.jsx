import images from "../constants/data";

const Footer = () => {
  return (
    <>
      <footer className="footer none1">
        <div className="container container--column">
          <div className="footer-top">
            <div className="footer__logo">
              <a href="#!">
                <img
                  src={images.logo}
                  alt="Areall | Продвижение недвижимости"
                />
              </a>
              <div className="footer__socials">
                <a href="tel:+79136236787" title="Позвонить по телефону">
                  <img src={images.phone} alt="phone" />
                </a>
                <a href="mailto:areall@mail.ru" title="Написать на почту">
                  <img src={images.mail} alt="mail" />
                </a>
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
            <div className="footer__nav">
              <nav>
                <ul className="footer__nav-list">
                  <li>
                    <a href="#!">Ценовое зонирование</a>
                  </li>
                  <li>
                    <a href="#!">Сегментирование и классификация</a>
                  </li>
                  <li>
                    <a href="#!">Недвижимость</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav">
              <nav>
                <ul className="footer__nav-list">
                  <li>
                    <a href="#!">Аналитика</a>
                  </li>
                  <li>
                    <a href="#!">Исследования</a>
                  </li>
                  <li>
                    <a href="#!">Совет экспертов</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav">
              <nav>
                <ul className="footer__nav-list">
                  <li>
                    <a href="#!">Контакты</a>
                  </li>
                  <li>
                    <a href="#!">Команда</a>
                  </li>
                  <li>
                    <a href="#!">Образование</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__question">
              <ul className="footer__nav-list">
                <li>
                  <form action="mailto:areall@mail.ru" className="footer__form">
                    <input
                      type="text"
                      placeholder="| Ваш вопрос?"
                      name="input"
                    />
                    <button type="button" className="footer__btn">
                      Направьте нам!
                    </button>
                  </form>
                </li>
                <li>
                  <div className="tooltip-text-ex">
                    <p>Нашли ошибку на сайте?</p>
                    <div className="tooltip-content">
                      <p>
                        Выделите текст (максимум 160 символов) и нажмите
                        Ctrl+Enter
                      </p>
                    </div>
                  </div>
                </li>
                <li>Есть замечания или предложения?</li>
              </ul>
            </div>
          </div>

          <div className="footer__copyright">
            <p>© Areall | 2012 - 2024 г.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
