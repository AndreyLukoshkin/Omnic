import React from 'react'

import '../styles/return/return.css'
import { API_DEVICE_UID } from '../config'
import Button from '../layout/Button'

const Return = () => {
  return (
    <div className="return__wrapper">
      <div className="return__container">
        <h2 className="return__container_h2">
          Умови повернення до інтернет магазину
        </h2>
        <p className="return__container_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          mollitia aspernatur, sit minima quod consequatur asperiores rerum
          debitis provident sapiente quos excepturi blanditiis aliquam
          voluptates aperiam, quasi doloremque? Ipsum non velit at ipsa. Totam
          alias labore blanditiis numquam? Reiciendis at voluptate doloremque
          eos quo esse, aut voluptatem dolorum amet corrupti maxime, fugiat
          sequi hic vitae? Veritatis quaerat ipsam neque possimus earum deleniti
          velit vero. Animi explicabo odit nisi? Qui, quod officia. Temporibus
          asperiores architecto nesciunt possimus magni exercitationem, aperiam
          iusto enim aut, officia at pariatur praesentium consectetur maxime
          inventore sunt, quis repudiandae hic alias! Qui omnis nobis natus
          inventore expedita.
        </p>
        <Button
          nav={`/main/${API_DEVICE_UID}`}
          buttonClass="return__container_button_back"
          textBtn="НАЗАД"
        />
      </div>
    </div>
  )
}

export default Return
