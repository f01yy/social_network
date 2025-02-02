import classNames from 'classnames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR} 
      className={classNames(cls.themeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}

export default ThemeSwitcher