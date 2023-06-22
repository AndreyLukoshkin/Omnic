import React from 'react'
import ImageButton from './ImageButton'
import '../Styles/Main/main.css'
import {
  textForImageButtonPost,
  textForImageButtonPackage,
} from '../constants/constans'

const Main = () => {
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
            nav="/packed"
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
