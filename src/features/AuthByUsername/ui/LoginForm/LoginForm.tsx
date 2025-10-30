import React from "react"
import cls from "./LoginForm.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"
import {Button} from "shared/ui/Button/Button"

interface LoginFormProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

export const LoginForm = (props: LoginFormProps) => {
  const {className} = props
  const {t} = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <input type="text" />
      <input type="text" />
      <Button>{t("Войти")}</Button>
    </div>
  )
}
