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
            <img src={images.qrCode} alt="QR-код для оплаты" />            
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
