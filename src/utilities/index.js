export const filterCellsFromWrongSize = (cells, loading) => {
  if (!loading) {
    return cells.filter((el) => el.type !== '445.0x405.0x580.0')
  }
}

export const findCharsOfSizes = (cells, loading) => {
  let arr = []
  if (cells && !loading) {
    cells.forEach((el) => {
      if (el.type === '200.0x110.0x405.0') arr.push('XXS')
      if (el.type === '200.0x160.0x405.0') arr.push('XS')
      if (el.type === '200.0x209.0x405.0') arr.push('M')
      if (el.type === '380.0x110.0x405.0') arr.push('S')
      if (el.type === '380.0x160.0x405.0') arr.push('L')
      if (el.type === '380.0x209.0x405.0') arr.push('XL')
      if (el.type === '645.0x210.0x405.0') arr.push('XXL')
      if (el.type === '645.0x365.0x405.0') arr.push('XXXL')
    })
  }
  return arr
}

export const checkSizeForPackage = (cells, uid) => {
  return cells.map((el) => ({
    ...el,
    isAvailable:
      el.params.width <= uid.max_cell_size.width &&
      el.params.height <= uid.max_cell_size.height &&
      el.params.depth <= uid.max_cell_size.depth,
  }))
}

export const classNameCheckSizeAndEmptyAvailable = (cell) => {
  if (!cell.has_empty || !cell.isAvailable) return 'notAvailable'
  else return 'empty'
}

// ${
//   cell.has_empty ? 'empty' : 'taken'
// }  ${i === active ? 'active' : ''} ${
//   cell.isAvailable ? 'available' : 'notAvailable'
// }
