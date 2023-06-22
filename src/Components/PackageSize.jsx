import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import BoxSize from './BoxSize'
import '../Styles/PackageSize/packageSize.css'
import { cellsAvailable } from '../api/cellsAvailable'
import Loader from '../UI/Loader'
import { arrayWithCharsOfSizes } from '../constants/constans'
import { useNavigate } from 'react-router-dom'

const PackageSize = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState('notActive')
  const [isActive, setIsActive] = useState(false)

  const handleItemClick = (index, elHasEmpty) => {
    if (elHasEmpty) {
      setActive(index)
      setIsActive(true)
    } else return
  }

  const dispatch = useDispatch()

  const cells = useSelector((state) => state.reducerCellsAvailable.data.data)

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
                  onClick={() => handleItemClick(i, el.has_empty)}
                  key={parseInt(Math.random() * 10000000)}
                  className={`box_container${i + 1} ${
                    el.has_empty ? 'empty' : 'taken'
                  }  ${i === active ? 'active' : ''}`}
                >
                  <BoxSize
                    charSize={arrayWithCharsOfSizes[i]}
                    size={el.type.split('.').join('')}
                    sizeNumbers={`${Math.round(
                      el.params.width / 10 - 0.2
                    )}x${Math.round(el.params.height / 10 - 0.2)}`}
                  />
                </div>
              ))
          ) : (
            <div>
              <Loader />
            </div>
          )}
          <Button
            nav="/packed"
            buttonClass="packageSize__container_button_back"
            textBtn="НАЗАД"
          />
          <button
            disabled={!isActive}
            className={`ui_btn packageSize__container_button_confirm ${
              !isActive ? 'packageSize__container_button_notActive' : ''
            }`}
            onClick={() => navigate('/congrats')}
          >
            ПІДТВЕРДИТИ
          </button>
        </div>
      </div>
    </div>
  )
}

export default PackageSize
