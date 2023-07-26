import React from 'react'
import "./Chip.scss";

const Chip = ({text, icon}) => {
  return (
    <div className='chip-container'>
      {icon ? React.createElement(icon, {size: 18}): null}
      {text}
    </div>
  )
}

export default Chip
