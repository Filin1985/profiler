import React, {memo, useCallback} from "react"
import cls from "./LoginForm.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"
import {Button, ButtonTheme} from "shared/ui/Button/Button"
import {Input} from "shared/ui/Input/Input"
import {useDispatch, useSelector} from "react-redux"
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice"
import {getLoginState} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState"

interface LoginFormProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

export const LoginForm = memo((props: LoginFormProps) => {
  const {className} = props
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const loginForm = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(() => {
    // dispatch(loginByUsername({username: loginForm?.username, password: loginForm?.password}))
  }, [dispatch, loginForm?.password, loginForm?.username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder="Введите имя пользователя"
        onChange={onChangeUsername}
        value={loginForm?.username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder="Введите пароль"
        onChange={onChangePassword}
        value={loginForm?.password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
      >
        {t("Войти")}
      </Button>
    </div>
  )
})
