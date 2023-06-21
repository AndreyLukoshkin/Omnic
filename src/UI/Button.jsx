import { useNavigate } from 'react-router-dom'
import '../Styles/uibutton/uibutton.css'

import React from 'react'

const Button = ({ buttonClass, textBtn, nav }) => {
  console.log(buttonClass)
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
