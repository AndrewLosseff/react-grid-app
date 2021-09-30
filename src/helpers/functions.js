export const updateCellValueOnClick = (grid, rowIndex, columnIndex) => {
    return (
        grid.map((row, i) =>
            row.map((cell, j) => {
                if (i === rowIndex || j === columnIndex) {
                    return cell ? cell + 1 : 1;
                }
                return cell;
            })
        )
    )
}

const checkSuccessiveNumbers = (row, rowIndex, memoizedfibonacciCalculator) => {
  const position = [];
  let fibCount = 0;
  for (let i = 2; i < row.length; i++) {
    if (
      row[i - 2] + row[i - 1] === row[i] &&
      memoizedfibonacciCalculator.includes(row[i - 2] + row[i - 1])
    ) {
      fibCount++;
    } else {
      if (fibCount >= 3) {
        for (let j = i - fibCount - 2; j < i; j++) {
          position.push([rowIndex, j]);
        }
      }
      fibCount = 0;
    }
  }
  return position;

}

const ifSuccessiveNumbersRows = (grid, memoizedfibonacciCalculator) => {
    let position = [];

    grid.forEach((row, index) => {
      const rowCoordinates = checkSuccessiveNumbers(row, index, memoizedfibonacciCalculator);
      if (rowCoordinates.length > 2) {
        position = [...position, ...rowCoordinates] 
      }
    });

    return position;

}

const ifSuccessiveNumbersColumns = (grid, memoizedfibonacciCalculator) => {
    const position = []
    // TODO: implement ifSuccessiveNumbersColumns
    return position;
}

export const ifSuccessiveNumbers = (grid, memoizedfibonacciCalculator) => [...ifSuccessiveNumbersRows(grid, memoizedfibonacciCalculator), ...ifSuccessiveNumbersColumns(grid, memoizedfibonacciCalculator)]

export const areEqualCellProps = (prevProps, newProps) => {
    if(
        !!prevProps.cell && !!newProps.cell && 
        prevProps.cell === newProps.cell &&
        prevProps.rowIndex === newProps.rowIndex &&
        prevProps.columnIndex === newProps.columnIndex
    ) {
        return true
    } else {
        return false
    }
}