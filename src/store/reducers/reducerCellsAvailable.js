import { checkSizeForPackage } from '../../utilities'
import {
  CELLS_AVAILABLE_REQUEST,
  GET_AVAILABLE_CELLS,
  GET_CELLS_ERROR,
} from '../constants'

const initialValue = {
  isError: false,
  isLoading: true,
  data: [],
  error: '',
}

const reducerCellsAvailable = (state = initialValue, action) => {
  switch (action.type) {
    case CELLS_AVAILABLE_REQUEST:
      return { ...state, isLoading: true }
    case GET_AVAILABLE_CELLS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: checkSizeForPackage(
          action.payload.data.cell_types,
          action.payload.deviceId
        ),
      }
    case GET_CELLS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducerCellsAvailable
