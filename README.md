# React Grid App

## Criterias: 

- Create a 50x50 grid.

- Whenever you click on a cell in this grid, 1 is added to all cells in the same row and column.

- If a cell was empty, set it to 1. 

- Every change to a cell should cause the cell to briefly light up yellow.

- If at least 5 successive numbers in the cells form a part of a Fibonacci sequence, shortly light these cells up green and then empty these cells.

## Two possible ways

- 2D array (Matrix) with or without row and column id check
- Hashtable

## TODO:

- Add more accurate way to chek for SuccessiveNumbers
- Add ifSuccessiveNumbersColumns
- Improve render with postion index && memoization
- Add HashTable option
- Add CSS vars for colors
- Remove highlight on the first load
- Add eslint and prettier
