import React from "react";

const Document = ({ item }) => {
  return (
    <div className="investigation__document">
      <div className="document__img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="document__info">
        <span className="document__type">{item.title}</span>
        <a
          href={item.pdf}
          className="document__link"
          target="_blank"
        >
          {item.text}
        </a>
        <div className="document__company">
          <span>Подготовлен:</span>
          <p>НП "Евразийский Союз Экспертов"</p>
        </div>
      </div>
      <div className="document__result">
        <div className="document__price">{item.price}</div>
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
  );
};

export default Document;
