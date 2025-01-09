import classNames from "classnames"
import cls from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom";
import { PropsWithChildren } from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends PropsWithChildren, LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink = (props: AppLinkProps) => {
  const { className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

  return (
    <Link 
      to={to} 
      className={classNames(cls.appLink, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}

export default AppLink