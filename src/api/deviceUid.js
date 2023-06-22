import axios from 'axios'
import { actionsDeviceUid } from '../redux/actionsDeviceUid'
import { API_BASE_URL, API_DEVICE_UID } from '../config/config'

export const deviceUid = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/2.0.0/public/device/${API_DEVICE_UID}/`
      )
      const data = await response.data
      dispatch(actionsDeviceUid(data))
    } catch (error) {
      console.error(`ERROR MESSAGE : ${error}`)
    }
  }
}
