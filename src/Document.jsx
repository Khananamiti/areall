import React from "react";
import {motion} from "framer-motion";

const Document = ({ item }) => {
  return (
    <motion.div className="investigation__document"
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
        <a
          className="document__link"
          target="_blank"
          href={item.demo}
        >
          {item.text}
        </a>
        <div className="document__company">
          <span>Подготовлен:</span>
          <p>НП "Евразийский Союз Экспертов"</p>
        </div>
      </div>

      {/* Цена, дата, кнопка  */}
      <div className="document__result">
        <div className="document__price">{item.price}</div>
        <div className="document__data">
          <p>ОПУБЛИКОВАН:</p>
          <p>{item.date}</p>
        </div>        
        <button
          className="document__btn"
          type="button"
          // onClick={window.open(./qr-code.html)}
        >
          Купить
        </button>        
      </div>
    </motion.div>
  );
};

export default Document;
