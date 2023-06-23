import axios from 'axios'
import { API_BASE_URL, API_DEVICE_UID } from '../../config'

export const actionDeviceUidRequest = () => {
  return {
    type: 'UID_REQUEST',
  }
}

export const actionsDeviceUidSuccess = (data) => {
  return {
    type: 'SET_UID',
    payload: data,
  }
}

export const actionsDeviceUidError = (error) => {
  return {
    type: 'GET_UID_ERROR',
    payload: error,
  }
}

export const getDeviceUid = () => {
  return async (dispatch) => {
    dispatch(actionDeviceUidRequest())
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/2.0.0/public/device/${API_DEVICE_UID}/`
      )
      const data = await response.data
      dispatch(actionsDeviceUidSuccess(data))
    } catch (error) {
      dispatch(actionsDeviceUidError(error))
    }
  }
}
