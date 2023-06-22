const initialValue = {
  requestAvailableCells: [],
}

const reducerCellsAvailable = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_CELLS':
      return { ...state, requestAvailableCells: action.payload }
    default:
      return state
  }
}

export default reducerCellsAvailable
