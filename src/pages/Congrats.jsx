import React from 'react'

import { API_DEVICE_UID } from '../config'
import Button from '../layout/Button'

const Congrats = () => {
  return (
    <div>
      <h2 style={{ fontSize: '50px', marginTop: '20px' }}>Congratulations!</h2>
      <Button
        nav={`/main/${API_DEVICE_UID}`}
        buttonClass="packageSize__container_button_back"
        textBtn="НАЗАД"
      />
    </div>
  )
}

export default Congrats
