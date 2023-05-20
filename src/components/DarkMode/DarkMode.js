import React from 'react'
import '../../styles/DarkMode.scss'

const DarkMode = ({mode, theme, onClick}) => {
  return (
    <div className='dark--mode__container'>
      <button 
        className='btn dark--mode__button'
        theme={theme}
        onClick={onClick}
      >
        {mode}
      </button>
    </div>
  )
}

export { DarkMode }