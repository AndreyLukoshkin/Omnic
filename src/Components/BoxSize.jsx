import '../styles/boxSize/boxSize.css'

import React from 'react'

const BoxSize = ({ size, sizeNumbers, charSize }) => {
  return (
    <div className="boxSize__container">
      <div className={`boxSize__container_${size}`}></div>
      <div className="boxSize__container_sizes">
        <p className="boxSize__container_size">{charSize}</p>
        <p className="boxSize__container_sizeNumbers">{sizeNumbers} см</p>
      </div>
    </div>
  )
}

export default BoxSize
