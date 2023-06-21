import React from 'react'
// import Header from '../Components/Header'
import ImageButton from './ImageButton'
import '../Styles/Main/main.css'
import { textForImgBtnFirst, textForImgBtnSecond } from '../constants/constans'

const Main = () => {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="main">
        <div className="main__container_text">
          <h1 className="main__container_text_h1">Вітаємо Вас!</h1>
          <p className="main__container_text_p">Що відправлятимемо сьогодні?</p>
        </div>
        <div className="main__container_imgBtn">
          <ImageButton
            textProp={textForImgBtnFirst}
            className="main__container_imgBtn_first"
          />
          <ImageButton
            textProp={textForImgBtnSecond}
            className="main__container_imgBtn_second"
          />
        </div>
      </div>
    </div>
  )
}

export default Main
