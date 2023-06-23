export const filterCellsFromWrongSize = (cells, loading) => {
  if (!loading) {
    return cells.filter((el) => el.type !== '445.0x405.0x580.0')
  }
}

export const sizeMappings = {
  '200.0x110.0x405.0': 'XXS',
  '200.0x160.0x405.0': 'XS',
  '200.0x209.0x405.0': 'M',
  '380.0x110.0x405.0': 'S',
  '380.0x160.0x405.0': 'L',
  '380.0x209.0x405.0': 'XL',
  '645.0x210.0x405.0': 'XXL',
  '645.0x365.0x405.0': 'XXXL',
}

export const checkSizeForPackage = (cells, deviceUid, sizeMappings) => {
  return cells.map((cell) => ({
    ...cell,
    cellSize: sizeMappings[cell.type],
    isAvailable:
      cell.params.width <= deviceUid.max_cell_size.width &&
      cell.params.height <= deviceUid.max_cell_size.height &&
      cell.params.depth <= deviceUid.max_cell_size.depth,
  }))
}

export const classNameCheckSizeAndEmptyAvailable = (cell) => {
  if (!cell.has_empty || !cell.isAvailable) return 'notAvailable'
  else return 'empty'
}

export const findExactSizeOfBoxContainer = (cell) => {
  return `${Math.round(cell.params.width / 10 - 0.2)}x${Math.round(
    cell.params.height / 10 - 0.2
  )}`
}
