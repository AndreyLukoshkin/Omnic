const initialValue = {
  requestUidData: [],
}

const reducerDeviceUid = (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_UID':
      return { ...state, requestUidData: action.payload }
    default:
      return state
  }
}

export default reducerDeviceUid
