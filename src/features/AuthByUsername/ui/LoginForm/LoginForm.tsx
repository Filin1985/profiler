import React, {memo, useCallback} from "react"
import cls from "./LoginForm.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"
import {Button, ButtonTheme} from "shared/ui/Button/Button"
import {Input} from "shared/ui/Input/Input"
import {useSelector} from "react-redux"
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice"
import {getLoginState} from "features/AuthByUsername/model/selectors/getLoginState/getLoginState"
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import {useAppDispatch} from "app/providers/StoreProvider"
import {Text, TextTheme} from "shared/ui/Text/Text"

export interface LoginFormProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

const LoginForm = memo((props: LoginFormProps) => {
  const {className} = props
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const {username, password, error, isLoading} = useSelector(getLoginState)

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
    dispatch(loginByUsername({username, password}))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        autoFocus
        type="text"
        className={cls.input}
        placeholder="Введите имя пользователя"
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder="Введите пароль"
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  )
})

export default LoginForm
