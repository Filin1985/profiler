import React from "react"
import cls from "./ProfilePage.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"

export interface ProfilePageProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

export const ProfilePage = (props: ProfilePageProps) => {
  const {className} = props
  const {t} = useTranslation()

  return (
    <div className={classNames(cls.Modal, {}, [className])}>ProfilePage</div>
  )
}
