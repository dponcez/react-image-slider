import React from 'react'
import { ControlButton } from '../ControlButton/ControlButton'
import chevronLeftButton from '../../assets/icons/chevron-left-btn.svg'

const ChevronLeftButton = ({onClick}) => {
  return (
    <>
      <ControlButton
        onClick={onClick}
        className='btn chevron--left'
        src={chevronLeftButton}
      />
    </>
  )
}

export { ChevronLeftButton }