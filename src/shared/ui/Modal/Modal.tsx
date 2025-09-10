import React from "react"
import cls from "./Modal.module.scss"
import {classNames} from "shared/lib/classNames/classNames"

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {className, children, isOpen, onClose} = props

  const closeHandler = () => {
    if (onClose) {
      onClose()
    }
  }

  const onContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  const mods = {
    [cls.opened]: isOpen,
  }

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeHandler}>
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </div>
  )
}
