import React from 'react'
import "./chip.css"

const chip = ({ label }) => {
  return (
    <p className='chip'>{label}</p>
  )
}

export default chip