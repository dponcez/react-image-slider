import React, { StrictMode } from 'react'
import { Main } from './components/Main/Main'
import { ThemeContextProvider } from './components/Context/Context'
import './App.css'

const App = () => {
  return (
    <StrictMode>
      <ThemeContextProvider>
        <div className='App'>
          <Main/>
        </div>
      </ThemeContextProvider>
    </StrictMode>
  )
}

export { App }