import classNames from 'classnames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button className={classNames(cls.button, [className, cls[theme]])} {...otherProps} >{children}</button>
  )
}

export default Button