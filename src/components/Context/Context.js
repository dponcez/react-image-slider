import React, { createContext } from 'react'
import { useDarkMode } from '../../hooks/useStorage'

export const ThemeContext = createContext(null)
export const ThemeContextProvider = ({children}) => {
  const [theme, toggleDarkMode] = useDarkMode('theme', 'dark')
  return (
    <ThemeContext.Provider value={[{theme}, toggleDarkMode]}>
      {children}
    </ThemeContext.Provider>
  )
}
