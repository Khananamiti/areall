import React, { useEffect, useState } from 'react'

const Registration = () => {
  // Управляемые компоненты, пустые строки
  const [email, setEmail] = useState ()
  const [password, setPassword] = useState ()
  // Состояние отражающее нахождение в input
  const [emailDirty, setEmailDirty] = useState (false)
  const [passwordDirty, setPasswordDirty] = useState (false)
  const [emailError, setEmailError] = useState ('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState ('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  useEffect( () => {
    if(emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test( String(e.target.value).toLowerCase()) ) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  // Срабатывает, когда пользователь покинул поле ввода (убрал курсор из input)
  const blurHandler = (e) => {
    // По имени объекта проверяем соответствие названию
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  const runClick = () => {
    window.open("index.html")
  }


  return (
    <div className="registration block block--w380">
      <form action="#" className="form">
        <h1>Регистрация</h1>
        {/* Если при нажатии на email есть ошибка, то будет подсвечено красным */}
        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
        <input onChange={emailHandler} value={email} className='input' onBlur={blurHandler} name="email" type="text" placeholder='Введите свою почту....'/>
        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
        <input onChange={passwordHandler} value={password} className='input' onBlur={blurHandler} name="password" type="password" placeholder='Введите свой пароль....'/>
        <button disabled={!formValid} className='btn' type='submit' onClick={runClick}>Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration