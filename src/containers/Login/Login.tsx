import React, { useState, useRef } from 'react'

import bgImg from '../../assets/images/login-background.jpg'
import styles from './Login.module.scss'

const Login: React.FC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const pwdInputRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (
      event.target.value !== '' &&
      !Array.from(emailInputRef.current!.classList).includes(styles.HasText)
    ) {
      emailInputRef.current!.classList.add(styles.HasText)
    }

    if (
      event.target.value === '' &&
      Array.from(emailInputRef.current!.classList).includes(styles.HasText)
    ) {
      emailInputRef.current!.classList.remove(styles.HasText)
    }
  }

  const onPwdChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (
      event.target.value !== '' &&
      !Array.from(pwdInputRef.current!.classList).includes(styles.HasText)
    ) {
      pwdInputRef.current!.classList.add(styles.HasText)
    }

    if (
      event.target.value === '' &&
      Array.from(pwdInputRef.current!.classList).includes(styles.HasText)
    ) {
      pwdInputRef.current!.classList.remove(styles.HasText)
    }
  }

  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div style={backgroundStyle}>
      <div className={styles.TransparentBackground}>
        <div className={styles.ContentContainer}>
          <h1 className={styles.Heading}>Sign In</h1>
          <form className={styles.LoginForm}>
            <div className={styles.FormGroup}>
              <label htmlFor='email' className={styles.LabelContainer}>
                <input
                  className={styles.InputControl}
                  name='name'
                  type='email'
                  id='email'
                  ref={emailInputRef}
                  value={email}
                  onChange={onEmailChangeHandler}
                  required
                />
                <label htmlFor='email' className={styles.Label}>
                  Email address
                </label>
              </label>
            </div>

            <div className={styles.FormGroup}>
              <label htmlFor='password' className={styles.LabelContainer}>
                <input
                  className={styles.InputControl}
                  name='password'
                  type='password'
                  id='password'
                  ref={pwdInputRef}
                  value={password}
                  onChange={onPwdChangeHandler}
                  required
                />
                <label htmlFor='password' className={styles.Label}>
                  Password
                </label>
              </label>
            </div>

            <button className={styles.Button}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
