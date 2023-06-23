import { GET_UID_ERROR, SET_UID, UID_REQUEST } from '../constants'

const initialValue = {
  isLoading: true,
  uidData: {},
  error: {},
}

const reducerDeviceUid = (state = initialValue, action) => {
  switch (action.type) {
    case UID_REQUEST:
      return { ...state, isLoading: true }
    case SET_UID:
      return { ...state, isLoading: false, uidData: action.payload.data }
    case GET_UID_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default reducerDeviceUid
