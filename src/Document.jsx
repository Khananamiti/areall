import React from "react";

const Document = ({ item }) => {
  return (
    <div className="investigation__document">
      <div className="document__img">
        <img src={item.img} alt={item.alt} /> 
      </div>
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
      <div className="document__result">
        <div className="document__price">{item.price}</div>
        <div className="document__data">
          <p>ОПУБЛИКОВАН:</p>
          <p>{item.date}</p>
        </div>        
        <button
          className="document__btn"
          type="button"
          // onClick={window.open('./qr-code.html')}
        >
          Купить
        </button>        
      </div>
    </div>
  );
};

export default Document;
