import React, {ChangeEvent, memo, useEffect, useRef} from "react"
import cls from "./Input.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {use} from "i18next";

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  } = props
  const ref = useRef<HTMLInputElement>()
  const [isFocused, setIsFocused] = React.useState(false)
  const [caretPosition, setCaretPosition] = React.useState(0)

  useEffect(() => {
    if(autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e.target.selectionStart || 0)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          <span>{`${placeholder}> `}</span>
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          className={cls.input}
          type={type}
          onChange={onChangeHandler}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{left: `${caretPosition * 7}px`}}
          />
        )}
      </div>
    </div>
  )
})
