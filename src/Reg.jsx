import React, { useEffect, useState } from "react";

// Принимает 2 параметра: текущее значение input и набор валидаторов
const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        // Минимальная длина
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        // Проверка пароля на пустоту
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    maxLengthError,
    inputValid,
  };
};

// Кастомный хук
const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  // Состояния отражающие нахождение в input
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  // Отрабатывает изменения внутри input
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Отрабатывает в тот момент, когда пользователь покинул input
  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

const Reg = () => {
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 8 });

  // const runClick = () => {
  //   window.open("index.html");
  // };

  return (
    <div className="registration">
      <div className="block">
        <form action="#" className="form">
          <h1 className="title-24">Регистрация</h1>
          {(email.isDirty && email.isEmpty) && 
            <div style={{ color: 'red' }}>Поле не может быть пустым</div>
          }
          {(email.isDirty && email.minLengthError) && 
            <div style={{ color: 'red' }}>Некорректная длина</div>
          }
          {(email.isDirty && email.emailError) && 
            <div style={{ color: 'red' }}>Некорректный email</div>
          }
          <input
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            className="input"
            name="email"
            type="text"
            placeholder="Введите свою почту...."
          />
          {password.isDirty && password.isEmpty && (
            <div style={{ color: 'red' }}>Поле не может быть пустым</div>
          )}
          {password.isDirty && password.minLengthError && (
            <div style={{ color: 'red' }}>Некорректная длина</div>
          )}
          {password.isDirty && password.maxLengthError && (
            <div style={{ color: 'red' }}>Слишком длинное слово</div>
          )}
          <input
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}
            className="input"
            name="password"
            type="password"
            placeholder="Введите свой пароль...."
          />
          <button
            disabled={!email.inputValid || !password.inputValid}
            className="document__btn"
            type="submit"
            // onClick={runClick}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reg;
