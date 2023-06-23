import React from 'react'
import { API_DEVICE_UID } from '../config'
import Button from '../layout/Button'
import '../styles/not-found/notFound.css'

const NotFound = () => {
  return (
    <div>
      <h2 style={{ fontSize: '50px' }}>ERROR 404 NOT FOUND</h2>
      <Button
        buttonClass="notFound__error_button"
        textBtn="НАЗАД"
        nav={`/main/${API_DEVICE_UID}`}
      />
    </div>
  )
}

export default NotFound
