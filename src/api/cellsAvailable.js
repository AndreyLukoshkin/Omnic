import axios from 'axios'
import { API_BASE_URL, API_DEVICE_UID } from '../config/config'
import { actionsCellsAvailable } from '../redux/actionsCellsAvailable'

export const cellsAvailable = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/2.0.0/public/orders/device/${API_DEVICE_UID}/cells/statuses/?type=5`
      )
      const data = await response.data
      dispatch(actionsCellsAvailable(data))
    } catch (error) {
      console.error(`ERROR MESSAGE : ${error}`)
    }
  }
}
