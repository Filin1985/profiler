import { classNames } from 'shared/lib/classNames/classNames';
import React, { type FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button } from '../../../shared/ui/Button/Button';

interface SideBarProps {
    className?: string
}

export const Sidebar: FC<SideBarProps> = ({ className = '' }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
