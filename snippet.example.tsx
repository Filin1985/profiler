import React from "react"
import cls from "./Modal.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTranslation} from "react-i18next"

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
}

export const Modal = (props: ModalProps) => {
  const {className} = props
  const {t} = useTranslation()

  return <div className={classNames(cls.Modal, {}, [className])}>Modal</div>
}
