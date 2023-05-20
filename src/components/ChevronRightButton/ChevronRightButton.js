import React from 'react'
import { ControlButton } from '../ControlButton/ControlButton'
import chevronRightButton from '../../assets/icons/chevron-right-btn.svg'

const ChevronRightButton = ({onClick}) => {
  return (
    <>
      <ControlButton
        onClick={onClick}
        className='btn chevron--right'
        src={chevronRightButton}
      />
    </>
  )
}

export { ChevronRightButton }