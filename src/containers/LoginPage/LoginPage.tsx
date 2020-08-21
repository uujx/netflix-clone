import React, { useState, useRef, BaseSyntheticEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import * as actions from '../../store/actions/index'
import { RootState } from '../../store/reducers/index'
import bgImg from '../../assets/images/login-background.jpg'
import NetflixLogo from '../../components/UI/NetflixLogo/NetflixLogo'
import styles from './LoginPage.module.scss'

type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const pwdInputRef = useRef<HTMLInputElement | null>(null)
  const [isLogin, setIsLogin] = useState(true)
  const { loading, error, isAuthed, token } = useSelector(
    (state: RootState) => state.auth
  )
  const dispatch = useDispatch()

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkHasText(emailInputRef.current!, event.target.value)

    checkHasError()
  }

  const onPwdChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    checkHasText(pwdInputRef.current!, event.target.value)

    checkHasError()
  }

  const onSubmitHandler: SubmitHandler<Inputs> = (
    data: Inputs,
    event: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    event?.preventDefault()
    dispatch(actions.auth(data, isLogin))
  }

  const onSwitchSignUp = () => {
    setIsLogin((prevState) => !prevState)
  }

  const checkHasText = (ref: HTMLInputElement, value: string) => {
    if (value !== '' && !Array.from(ref.classList).includes(styles.HasText)) {
      ref.classList.add(styles.HasText)
    }

    if (value === '' && Array.from(ref.classList).includes(styles.HasText)) {
      ref.classList.remove(styles.HasText)
    }
  }

  const checkHasError = (error = errors) => {
    if (
      error.email &&
      !Array.from(emailInputRef.current!.classList).includes(styles.HasError)
    ) {
      emailInputRef.current?.classList.add(styles.HasError)
    }
    if (
      !error.email &&
      Array.from(emailInputRef.current!.classList).includes(styles.HasError)
    ) {
      emailInputRef.current?.classList.remove(styles.HasError)
    }

    if (
      error.password &&
      !Array.from(pwdInputRef.current!.classList).includes(styles.HasError)
    ) {
      pwdInputRef.current?.classList.add(styles.HasError)
    }
    if (
      !error.password &&
      Array.from(pwdInputRef.current!.classList).includes(styles.HasError)
    ) {
      pwdInputRef.current?.classList.remove(styles.HasError)
    }
  }

  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  let signupText, switchText
  if (isLogin) {
    signupText = 'New to Netflix-clone? '
    switchText = 'Sign Up Now'
  } else {
    signupText = 'Have an account? '
    switchText = 'Log in'
  }
  const signInOrSignUp = (
    <p className={styles.SignupText}>
      {signupText}
      <span className={styles.Link} onClick={onSwitchSignUp}>
        {switchText}
      </span>
      .
    </p>
  )

  let emailErrorMsg
  if (errors.email?.type === 'required') {
    emailErrorMsg = 'Email address is required.'
  } else if (errors.email?.type === 'pattern') {
    emailErrorMsg = 'Please enter a valid email address.'
  }
  const emailError = <p className={styles.ErrorMsg}>{emailErrorMsg}</p>

  let pwdErrorMsg
  if (errors.password?.type === 'required') {
    pwdErrorMsg = 'Password is required.'
  } else if (errors.password?.type === 'minLength') {
    pwdErrorMsg = 'Password must be longer then 4 characters.'
  } else if (errors.password?.type === 'maxLength') {
    pwdErrorMsg = 'Password must be shorter then 60 characters.'
  }
  const passwordError = <p className={styles.ErrorMsg}>{pwdErrorMsg}</p>

  let redirect = <Redirect to='/' />

  return isAuthed ? (
    redirect
  ) : (
    <div style={backgroundStyle}>
      <div className={styles.TransparentBackground}>
        <NetflixLogo alone={true} />
        <div className={styles.ContentContainer}>
          <h1 className={styles.Heading}>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
          {error === '' ? null : <p className={styles.RequestError}>{error}</p>}
          <form
            className={styles.LoginForm}
            onSubmit={handleSubmit(onSubmitHandler, (errors) =>
              checkHasError(errors)
            )}>
            <div className={styles.FormGroup}>
              <label htmlFor='email' className={styles.LabelContainer}>
                <input
                  className={styles.InputControl}
                  name='email'
                  type='email'
                  id='email'
                  ref={(e) => {
                    register(e, {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    })
                    emailInputRef.current = e
                  }}
                  onChange={onEmailChangeHandler}
                  required
                />
                <label htmlFor='email' className={styles.Label}>
                  Email address
                </label>
              </label>
              {emailError}
            </div>

            <div className={styles.FormGroup}>
              <label htmlFor='password' className={styles.LabelContainer}>
                <input
                  className={styles.InputControl}
                  name='password'
                  type='password'
                  id='password'
                  ref={(e) => {
                    register(e, {
                      required: true,
                      minLength: 4,
                      maxLength: 60
                    })
                    pwdInputRef.current = e
                  }}
                  onChange={onPwdChangeHandler}
                  required
                />
                <label htmlFor='password' className={styles.Label}>
                  Password
                </label>
              </label>
              {passwordError}
            </div>

            <button className={styles.Button} type='submit'>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          {signInOrSignUp}
        </div>
      </div>
    </div>
  )
}

export default Login
