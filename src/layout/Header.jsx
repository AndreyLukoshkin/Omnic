import React from 'react'
import Logo from '../components/Logo'
import '../styles/header/header.css'
import { Outlet, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header__wrapper">
      <div className="header__container">
        <Logo className="header__container_logo" />
        <div className="header__container_button">
          <div>
            <button
              onClick={() => navigate('/instruction')}
              className="header__container_button_instruction"
            >
              ІНСТРУКЦІЯ
            </button>
          </div>
          <div className="header__container_post">ПОШТОМАТ №1234</div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Header
