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
          <div className="box_container1">
            <BoxSize size="XXS" sizeNumbers="20x11 см" />
          </div>
          <div className="box_container2">
            <BoxSize size="L" sizeNumbers="38x16 см" />
          </div>
          <div className="box_container3">
            <BoxSize size="M" sizeNumbers="20x21 см" />
          </div>
          <div className="box_container4">
            <BoxSize size="XXL" sizeNumbers="64x21 см" />
          </div>
          <div className="box_container5">
            <BoxSize size="XS" sizeNumbers="20x16 см" />
          </div>
          <div className="box_container6">
            <BoxSize size="XXXL" sizeNumbers="64x36 см" />
          </div>
          <div className="box_container7">
            <BoxSize size="S" sizeNumbers="38x11 см" />
          </div>
          <div className="box_container8">
            <BoxSize size="XL" sizeNumbers="38x21 см" />
          </div>
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
