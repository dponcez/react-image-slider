import React, { useState, useEffect, createContext } from 'react'
import { DarkMode } from '../DarkMode/DarkMode'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import darkMode from "../../assets/images/dark-switch.png";
import lightMode from "../../assets/images/light-switch.png";
import { dataImages } from '../../data/dataImages'
import '../../styles/Main.scss'

const Main = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )
  const ThemeContext = createContext(null)

  const toggleDarkMode = () => {
    setTheme((currentTheme) =>  currentTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.id = theme
  }, [theme])

  return (
    <div className='container'>
      <DarkMode
        mode={
          theme === 'dark' ?
          (<img src={lightMode} alt='light mode button'/>) : 
          (<img src={darkMode} alt='dark mode button'/>)
        }
        theme={theme}
        onClick={toggleDarkMode}
      />
      <ThemeContext.Provider 
        value={{theme: toggleDarkMode}}
      >
      </ThemeContext.Provider>
      <header className='header'>
        <h1 className='heading'>simple react image slider</h1>
      </header>
      <ImageSlider slides={dataImages}/>
    </div>
  )
}

export { Main }