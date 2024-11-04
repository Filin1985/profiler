import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
      <button
            type={'button'}
            className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
          {children}
      </button>
  )
}
