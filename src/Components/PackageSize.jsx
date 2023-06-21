import React from 'react'
import Button from '../UI/Button'
import BoxSize from './BoxSize'
import '../Styles/PackageSize/packageSize.css'

const PackageSize = () => {
  return (
    <div className="wrapper__packageSize">
      <div className="packageSize_container">
        <h2 className="packageSize_container_h2">Оберіть розмір посилки</h2>
        <div className="packageSize__container_boxes">
          <BoxSize />
          <BoxSize />
          <BoxSize />
          <BoxSize />
          <BoxSize />
          <BoxSize />
          <BoxSize />
          <BoxSize />
        </div>
        <div className="packageSize__container_buttons">
          <Button
            nav="/packed"
            buttonClass="packageSize__container_button_back"
            textBtn="НАЗАД"
          />
          <Button
            nav="/package-size"
            buttonClass="packageSize__container_button_confirm"
            textBtn="ПІДТВЕРДИТИ"
          />
        </div>
      </div>
    </div>
  )
}

export default PackageSize
