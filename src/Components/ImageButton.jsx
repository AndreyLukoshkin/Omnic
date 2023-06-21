import React from 'react'
import { useNavigate } from 'react-router-dom'

const ImageButton = ({ textProp, className, nav }) => {
  const navigate = useNavigate()
  return (
    <div className="main__container_imgBtn_wrapper">
      <div className={className}></div>
      <button
        className="main__container_imgBtn_btn"
        onClick={() => navigate(nav)}
      >
        {textProp}
      </button>
    </div>
  )
}

export default ImageButton
