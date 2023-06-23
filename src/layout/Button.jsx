import '../styles/uibutton/uibutton.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ buttonClass, textBtn, nav }) => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate(nav)} className={`ui_btn ${buttonClass}`}>
        {textBtn}
      </button>
    </>
  )
}

export default Button
