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
