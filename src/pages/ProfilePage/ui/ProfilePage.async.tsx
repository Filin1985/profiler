import {FC, lazy} from "react"
import {ProfilePageProps} from "./ProfilePage"

export const ProfilePageAsync = lazy<FC<ProfilePageProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import("./ProfilePage")), 1500)
    }),
)
