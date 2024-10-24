import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import React, {FC, useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SideBarProps {
    className?: string;
}

export const Sidebar: FC<SideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};