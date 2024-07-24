import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false); // useState хранит флаг false

  const goToTop = () => { // 
    window.scrollTo({
      top: 0, // Скролл до верхней точки
      behavior: "smooth", // Плавное перемещение
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false) // Расстояние от верхней точки больше 400 - флаг появится
    })
  }, [])
  return (
    <>
      {showTopBtn && // Проверяем, если флаг присутствует, то можем на него нажать
      <MdKeyboardDoubleArrowUp className="btn-up" onClick={goToTop}/>
      }
    </>
  );
};

export default ScrollToTop;
