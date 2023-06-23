import axios from 'axios'
import { API_BASE_URL, API_DEVICE_UID } from '../../config'

export const actionCellsAvailableRequest = () => {
  return {
    type: 'CELLS_AVAILABLE_REQUEST',
  }
}

export const actionCellsAvailableSuccess = (data) => {
  return {
    type: 'GET_AVAILABLE_CELLS',
    payload: data,
  }
}

export const actionCellsAvailableError = (error) => {
  return {
    type: 'GET_CELLS_ERROR',
    payload: error,
  }
}

export const getCellsAvailable = (deviceId) => {
  return async (dispatch) => {
    dispatch(actionCellsAvailableRequest())
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/2.0.0/public/orders/device/${API_DEVICE_UID}/cells/statuses/?type=5`
      )
      const data = await response.data.data
      dispatch(actionCellsAvailableSuccess({ deviceId, data }))
    } catch (error) {
      dispatch(actionCellsAvailableError(error))
    }
  }
}
