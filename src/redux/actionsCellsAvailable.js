export const actionsCellsAvailable = (data) => {
  return {
    type: 'GET_AVAILABLE_CELLS',
    payload: data,
  }
}
