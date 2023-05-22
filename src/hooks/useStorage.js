import { useState, useEffect } from 'react'

export const useDarkMode = (key, initialValue) => {
  const [theme, setTheme] = useState(initialValue)

  const setMode = (mode) => {
    const local = window.localStorage.setItem(key, mode)
    setTheme(mode)
    return local
  }

  const toggleDarkMode = () => {
    theme === 'dark' ?
      setMode('light') :
      setMode('dark')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem(key)
    localTheme ? setTheme(localTheme) : setMode(initialValue)
    document.body.id = theme
  }, [theme])

  return [theme, toggleDarkMode]
}