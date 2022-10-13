import React from 'react'

export default function Slider( {min, max, value, handleChange}: {min: number, max: number, value: number, handleChange: React.ChangeEventHandler }) {
  return (
    <div className='slider-container'>
        <input type="range" className='slider'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}
