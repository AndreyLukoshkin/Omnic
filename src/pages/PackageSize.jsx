import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../layout/Button'
import BoxSize from '../components/BoxSize'
import '../styles/package-size/packageSize.css'
import { getCellsAvailable } from '../store/actions/actionsCellsAvailable'
import Loader from '../layout/Loader'
import { useNavigate } from 'react-router-dom'
import { filterCellsFromWrongSize, findCharsOfSizes } from '../utilities'
import { API_DEVICE_UID } from '../config'
import { getDeviceUid } from '../store/actions/actionsDeviceUid'

const PackageSize = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [active, setActive] = useState('notActive')
  const [isActive, setIsActive] = useState(false)

  const isCellsLoading = useSelector(
    (state) => state.reducerCellsAvailable.isLoading
  )
  const error = useSelector((state) => state.reducerCellsAvailable)
  const cells = useSelector((state) => state.reducerCellsAvailable.data)
  const uid = useSelector((state) => state.reducerDeviceUid.uidData)

  const arrayWithCells = filterCellsFromWrongSize(cells, isCellsLoading)
  const arrayWithCharsOfSizes = findCharsOfSizes(arrayWithCells, isCellsLoading)

  const handleItemClick = (index, elHasEmpty) => {
    if (elHasEmpty) {
      setActive(index)
      setIsActive(true)
    }
  }

  useEffect(() => {
    if (!sessionStorage.getItem('uid')) {
      navigate(`/main/${API_DEVICE_UID}`)
    }
  }, [sessionStorage.getItem('uid')])

  useEffect(() => {
    dispatch(getDeviceUid())
    dispatch(
      getCellsAvailable(!uid ? uid : JSON.parse(sessionStorage.getItem('uid')))
    )
  }, [dispatch])

  return (
    <div className="wrapper__packageSize">
      <div className="packageSize_container">
        <h2 className="packageSize_container_h2">Оберіть розмір посилки</h2>
        <div className="packageSize__container_boxes">
          {!isCellsLoading && arrayWithCells.length > 1 ? (
            arrayWithCells.map((cell, i) => (
              <div
                onClick={() => handleItemClick(i, cell.has_empty)}
                key={cell.type}
                className={`box_container${i + 1} ${
                  cell.has_empty ? 'empty' : 'taken'
                }  ${i === active ? 'active' : ''} ${
                  cell.isAvailable ? 'available' : 'notAvailable'
                }`}
              >
                <BoxSize
                  charSize={arrayWithCharsOfSizes[i]}
                  size={cell.type.split('.').join('')}
                  sizeNumbers={`${Math.round(
                    cell.params.width / 10 - 0.2
                  )}x${Math.round(cell.params.height / 10 - 0.2)}`}
                />
              </div>
            ))
          ) : error.isError ? (
            <div>ERROR MESSAGE: {error.error.message}</div>
          ) : (
            <div>
              <Loader />
            </div>
          )}
          <Button
            nav={`/packed/${API_DEVICE_UID}`}
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
