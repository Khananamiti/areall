import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false); // useState хранит флаг false

  const goToTop = () => { // Создали функцию
    //
    window.scrollTo({ // Обращаемся к окну браузера
      top: 0, // Скролл до верхней точки
      behavior: "smooth", // Плавное перемещение
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => { // Навесили обработчик событий, проскролить
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false); // Если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    });
  }, []);
  return (
    <>
      {showTopBtn && ( // Проверяем, если флаг присутствует, то можем на него нажать
        <MdKeyboardDoubleArrowUp className="btn-up" onClick={goToTop} /> // ToDo Напиши стиль для кнопки вверх
      )}
    </>
  );
};

export default ScrollToTop;
