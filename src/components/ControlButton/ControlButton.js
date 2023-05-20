import React, { Fragment } from 'react'
import { ReactSVG } from 'react-svg'

const ControlButton = ({onClick, className, src}) => {
  return (
    <Fragment>
      <button 
        onClick={onClick}
        className={className}
      >
        <ReactSVG src={src}/>
      </button>
    </Fragment>
  )
}

export { ControlButton }