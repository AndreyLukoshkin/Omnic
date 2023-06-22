import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import BoxSize from './BoxSize'
import '../Styles/PackageSize/packageSize.css'
import { cellsAvailable } from '../api/cellsAvailable'

const PackageSize = () => {
  const dispatch = useDispatch()

  const cells = useSelector(
    (state) => state.reducerCellsAvailable.requestAvailableCells.data
  )

  useEffect(() => {
    dispatch(cellsAvailable())
  }, [dispatch])

  return (
    <div className="wrapper__packageSize">
      <div className="packageSize_container">
        <h2 className="packageSize_container_h2">Оберіть розмір посилки</h2>
        <div className="packageSize__container_boxes">
          {cells && cells.cell_types.length > 1 ? (
            cells.cell_types
              .filter((el) => el.type !== '445.0x405.0x580.0')
              .map((el, i) => (
                <div
                  className={`box_container${i + 1} ${
                    el.has_empty ? 'empty' : 'taken'
                  }`}
                >
                  <BoxSize
                    size={el.type.split('.').join('')}
                    sizeNumbers={`${Math.round(
                      el.params.width / 10 - 0.2
                    )}x${Math.round(el.params.height / 10 - 0.2)}`}
                  />
                </div>
              ))
          ) : (
            <div>Loading...</div>
          )}

          {/* <div className="box_container1">
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
          </div> */}
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
