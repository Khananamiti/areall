import React, { useEffect, useState } from "react";

const Authorization = () => {
  // Управляемые компоненты, пустые строки
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // Состояния отражающие нахождение в input
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  // Состояния отражающие ошибки
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  // Пройдена ли валидация формой
  const [formValid, setFormValid] = useState(false);

  // хук, если форма валидна, то на кнопку можно нажать
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  // Изменяем состояние на то,что находится в текущем target
  const emailHandler = (e) => {
    setEmail(e.target.value);
    // Валидация
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 8");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  // Срабатывает, когда пользователь покинул поле ввода (убрал курсор из input)
  const blurHandler = (e) => {
    // По имени объекта проверяем соответствие названию
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const runClick = () => {
    window.open("index.html");
  };

  return (
    <div className="authorization">
      <div className="block">
        <form action="#" className="form">
          <h1 className="title-24">Личный кабинет</h1>
          {/* Если при нажатии на email есть ошибка, то будет создана красная надпись над input с текстом ошибки */}
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <input
            onChange={emailHandler}
            value={email}
            className="input"
            onBlur={blurHandler}
            name="email"
            type="text"
            placeholder="Введите свою почту...."
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <input
            onChange={passwordHandler}
            value={password}
            className="input"
            onBlur={blurHandler}
            name="password"
            type="password"
            placeholder="Введите свой пароль...."
          />
          {/* Поправить! Убрать ховер эффект при невалидной форме*/}
           <button
            disabled={!formValid}
            className="document__btn"
            type="submit"
            onClick={runClick}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
