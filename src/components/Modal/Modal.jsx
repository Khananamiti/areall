import images from "../../constants/data";
import React from "react";

/*
Компонента Модального Окна (МО) принимает пропсы: 
  active - отвечает за то, видна компонента или нет
  setActive - функция, которая это состояние изменяет
  children - делает компонент переиспользуемым
*/
const Modal = ({ active, setActive, children }) => {
  return (
    <>
      <div
        className={active ? "modal active" : "modal"} // Блок МО
        // Вешаем слушатель обработки нажатия. При нажатии на затемненную область, МО закроется
        onClick={() => setActive(false)}
      >
        <div
          //
          className={active ? "modal__content active" : "modal__content"} // Контент Модального окна
          // МО не закроется, при нажатии на контентную область
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
