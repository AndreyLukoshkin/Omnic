import React from 'react'

const ImageButton = ({ textProp, className }) => {
  return (
    <div className="main__container_imgBtn_wrapper">
      <div className={className}></div>
      <button className="main__container_imgBtn_btn">{textProp}</button>
    </div>
  )
}

export default ImageButton
