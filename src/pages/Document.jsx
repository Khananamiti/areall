import images from "../constants/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
// import { Route, Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Document = ({ item }) => {
  // Создаем состояние отвечающее за видимость окна
  const [modalActive, setModalActive] = useState(false); // По умолчанию модально окно невидимое

  return (
    <>
      <motion.div
        className="investigation__document"
        initial={{ y: 2, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -2, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Обложка документа */}
        <div className="document__img">
          <img src={item.img} alt={item.alt} />
        </div>

        {/* Информация */}
        <div className="document__info">
          <span className="document__type">{item.type}</span>
          <a className="document__link" target="_blank" href={item.demo}>
            {item.text}
          </a>
          <div className="document__company">
            <span>Подготовлен:</span>
            <p>НП "Евразийский Союз Экспертов"</p>
          </div>
        </div>

        {/* Цена, дата, кнопка */}
        <div className="document__result">
          <div className="document__price">{item.price}</div>
          <div className="document__data">
            <p>ОПУБЛИКОВАН:</p>
            <p>{item.date}</p>
          </div>

          <button
            className="document__btn"
            type="button"
            onClick={() => setModalActive(true)} // Вешаем слушатель нажатия
          >
            Купить
          </button>

          {/* Передаем переменной функцию ee изменяющую как пропсы в модальное окно */}
          <Modal active={modalActive} setActive={setModalActive}>
            <div className="qr">
              <div className="block block--w480">
                <div className="qr__content">

                  <div className="qr__title">
                    <h2 className="title-24">Оплата по QR-коду</h2>
                    <div className="title-line"></div>
                  </div>

                  <div className="qr__info">
                    <p>
                      Некоммерческое Партнерство “Евразийский Союз Экспертов”
                    </p>
                    <p>Areall</p>
                    <div className="qr__price">
                      <p>Сумма к оплате:</p>
                      <p>{item.price}</p>
                    </div>
                  </div>

                  <div className="qr__code">
                    <p>
                      Что бы оплатить заказ, откройте приложение мобильного банка и отсканируйте QR-код
                    </p>
                    <img
                      src={item.qr}
                      alt="QR-код для оплаты"
                    />
                  </div>

                  <div className="qr__spb">
                    <p>Платеж проводится с помощью</p>
                    <img
                      src={images.sbpLogo}
                      alt="QR-код для оплаты"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </motion.div>

      {/* <Router>
      <Routes>
        <Route exact path="/" element={<Купить/>} />

      </Routes>
    </Router> */}
    </>
  );
};

export default Document;
