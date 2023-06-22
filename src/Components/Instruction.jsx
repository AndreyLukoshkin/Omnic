import React from 'react'
import Button from '../UI/Button'
import '../Styles/Instruction/instruction.css'
import { API_DEVICE_UID } from '../config/config'

const Instruction = () => {
  return (
    <div className="instruction_wrapper">
      <div className="instruction__container">
        <h2 className="instruction__container_h2">Інструкція</h2>
        <div className="instruction__container_img_text">
          <div className="instruction__container_img"></div>
          <div className="instruction__container_text">
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
        <div className="instruction__container_buttons">
          <Button
            nav={`/main/${API_DEVICE_UID}`}
            buttonClass="instruction__container_button_back"
            textBtn="НАЗАД"
          />
        </div>
      </div>
    </div>
  )
}

export default Instruction
