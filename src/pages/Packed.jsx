import '../styles/packed/packed.css'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { API_DEVICE_UID } from '../config'
import Button from '../layout/Button'
import { getDeviceUid } from '../store/actions/actionsDeviceUid'

const Packed = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeviceUid())
  }, [dispatch])

  useEffect(() => {
    if (!sessionStorage.getItem('uid')) {
      navigate(`/main/${API_DEVICE_UID}`)
    }
  }, [navigate])

  return (
    <div className="wrapper__packed">
      <div className="packed__container">
        <h2 className="packed__container_h2">
          Відправлення має бути надійно упаковане
        </h2>
        <div className="packed__container_img_text">
          <div className="packed__container_img"></div>
          <div className="packed__container_text">
            <ol>
              <li>
                Упакуйте товар у коробку чи пакет. На упаковці не повинно бути
                сторонніх наклейок та етикеток;
              </li>
              <li>
                Заклейте упаковку скотчем, щоб не було доступу до вкладених
                предметів;
              </li>
            </ol>
          </div>
        </div>
        <div className="packed__container_buttons">
          <Button
            nav={`/main/${API_DEVICE_UID}`}
            buttonClass="packed__container_button_back"
            textBtn="НАЗАД"
          />
          <Button
            nav={`/package-size/${API_DEVICE_UID}`}
            buttonClass="packed__container_button_confirm"
            textBtn="Я ДОБРЕ УПАКУВАВ"
          />
        </div>
      </div>
    </div>
  )
}

export default Packed
