import ImageButton from '../layout/ImageButton'
import '../styles/main/main.css'
import { textForImageButtonPost, textForImageButtonPackage } from '../constants'
import { API_DEVICE_UID } from '../config'
import { useDispatch, useSelector } from 'react-redux'
import { getDeviceUid } from '../store/actions/actionsDeviceUid'
import { useEffect } from 'react'

const Main = () => {
  const uid = useSelector((state) => state.reducerDeviceUid.uidData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDeviceUid())
  }, [dispatch])

  useEffect(() => {
    if (uid) sessionStorage.setItem('uid', JSON.stringify(uid))
  }, [uid])

  return (
    <div className="main__wrapper">
      <div className="main__container">
        <div className="main__container_text">
          <h1 className="main__container_text_h1">Вітаємо Вас!</h1>
          <p className="main__container_text_p">Що відправлятимемо сьогодні?</p>
        </div>
        <div className="main__container_imageButton">
          <ImageButton
            textProp={textForImageButtonPost}
            className="main__container_imageButton_imgPost"
            nav={`/packed/${API_DEVICE_UID}`}
          />
          <ImageButton
            textProp={textForImageButtonPackage}
            className="main__container_imageButton_imgPackage"
            nav="/return"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
