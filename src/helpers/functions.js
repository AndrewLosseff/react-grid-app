import { FIBONACCI_NUMBERS } from "./consts";

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

const checkSuccessiveNumbers = (row, rowIndex) => {
    const position = [];
    let counter = 0;

    for (let i = 2; i < row.length; i++) {

        if (row[i - 2] + row[i - 1] === row[i] && FIBONACCI_NUMBERS.includes(row[i])) {
            counter++;
        } 
        
        else if (counter > 2){
             
            for (let j = i - counter - 2; j < i; j++) {
                position.push([rowIndex, j]);
            }

            counter = 0;
        
        }
    }

    return position;

}

const ifSuccessiveNumbersRows = (grid) => {

    let position = [];

    grid.forEach((row, index) => {
      const rowCoordinates = checkSuccessiveNumbers(row, index);
      if (rowCoordinates.length > 2) {
        position = [...position, ...rowCoordinates] 
      }
    });

    return position;

}

const ifSuccessiveNumbersColumns = (grid) => {
    const position = []
    // TODO: implement ifSuccessiveNumbersColumns
    return position;
}

export const ifSuccessiveNumbers = (grid) => [...ifSuccessiveNumbersRows(grid), ...ifSuccessiveNumbersColumns(grid)]