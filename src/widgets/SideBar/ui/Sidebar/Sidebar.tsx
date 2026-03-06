import {classNames} from "shared/lib/classNames/classNames"
import {useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher"
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button"
import {useTranslation} from "react-i18next"
import cls from "./Sidebar.module.scss"
import {SidebarItemsList} from "widgets/Sidebar/model/items"
import {SidebarItem} from "../SidebarItem/SidebarItem"

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const {t} = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
