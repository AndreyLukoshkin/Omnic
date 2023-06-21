import React from 'react'
import '../Styles/BoxSize/boxSize.css'

const BoxSize = ({ size, sizeNumbers }) => {
  return (
    <div className="boxSize__container">
      <div className={`boxSize__container_${size}`}></div>
      <div className="boxSize__container_sizes">
        <p className="boxSize__container_size">{size}</p>
        <p className="boxSize__container_sizeNumbers">{sizeNumbers}</p>
      </div>
    </div>
  )
}

export default BoxSize
