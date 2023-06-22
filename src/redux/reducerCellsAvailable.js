const initialValue = {
  data: [],
}

const reducerCellsAvailable = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_CELLS':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default reducerCellsAvailable
