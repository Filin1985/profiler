import React from "react"
import cls from "./SidebarItem.module.scss"
import {useTranslation} from "react-i18next"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink"
import {RoutePath} from "shared/config/routeConfig/routeConfig"
import MainIcon from "shared/assets/icons/main-20-20.svg"
import {SidebarItemType} from "widgets/Sidebar/model/items"

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = ({item, collapsed}: SidebarItemProps) => {
  const {t} = useTranslation()

  return (
    <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={item.path}>
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
}
