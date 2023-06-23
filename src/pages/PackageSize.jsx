import '../styles/package-size/packageSize.css'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import BoxSize from '../components/BoxSize'
import { API_DEVICE_UID } from '../config'
import Button from '../layout/Button'
import Loader from '../layout/Loader'
import { getCellsAvailable } from '../store/actions/actionsCellsAvailable'
import { getDeviceUid } from '../store/actions/actionsDeviceUid'
import {
  classNameCheckSizeAndEmptyAvailable,
  filterCellsFromWrongSize,
  findCharsOfSizes,
  findExactSizeOfBoxContainer,
} from '../utilities'

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

  const arrayWithCellsFiltered = filterCellsFromWrongSize(cells, isCellsLoading)
  const arrayWithCharsOfSizes = findCharsOfSizes(
    arrayWithCellsFiltered,
    isCellsLoading
  )

  const handleItemClick = (index, elHasEmpty, isAvailable) => {
    if (elHasEmpty && isAvailable) {
      setActive(index)
      setIsActive(true)
    }
  }

  useEffect(() => {
    if (!sessionStorage.getItem('uid')) {
      navigate(`/main/${API_DEVICE_UID}`)
    }
  }, [navigate])

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
          {!isCellsLoading && arrayWithCellsFiltered.length > 1 ? (
            arrayWithCellsFiltered.map((cell, i) => (
              <div
                onClick={() =>
                  handleItemClick(i, cell.has_empty, cell.isAvailable)
                }
                key={cell.type}
                className={`box_container${i + 1} ${
                  i === active ? 'active' : ''
                } ${classNameCheckSizeAndEmptyAvailable(cell)}`}
              >
                <BoxSize
                  charSize={arrayWithCharsOfSizes[i]}
                  size={cell.type.split('.').join('')}
                  sizeNumbers={findExactSizeOfBoxContainer(cell)}
                />
              </div>
            ))
          ) : error.isError ? (
            <div>ERROR MESSAGE: {error.error}</div>
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
