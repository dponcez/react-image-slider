import React, { useContext } from 'react'
import { DarkMode } from '../DarkMode/DarkMode'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { ThemeContext } from '../Context/Context'
import darkMode from "../../assets/images/dark-switch.png"
import lightMode from "../../assets/images/light-switch.png"
import { dataImages } from '../../data/dataImages'
import '../../styles/Main.scss'

const Main = () => {
  const [{theme}, toggleDarkMode] = useContext(ThemeContext)
  
  return (
    <>
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
        <header className='header'>
          <h1 className='heading'>simple react image slider</h1>
        </header>
        <ImageSlider slides={dataImages}/>
      </div>
    </>
  )
}

export { Main }