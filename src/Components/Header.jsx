import React from 'react'
import Logo from './Logo'
import '../Styles/Header/header.css'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Logo className="header__logo" />
        <div className="header__container">
          <div className="header__container_instruction">ІНСТРУКЦІЯ</div>
          <div className="header__container_post">ПОШТОМАТ №1234</div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Header
