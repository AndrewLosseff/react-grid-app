import React, { useState, useCallback, useEffect } from 'react'
import styles from './Grid.module.css'
import Row from '../Row'
import { BASE_GRID } from '../../helpers/consts'
import { ifSuccessiveNumbers, updateCellValueOnClick } from '../../helpers/functions'


const Grid = () => {

    const [grid, setGrid] = useState(BASE_GRID)

    const onCellClick = useCallback (
        (rowIndex, columnIndex) => {
            let newGrid = updateCellValueOnClick(grid, rowIndex, columnIndex);
            setGrid(newGrid);
        },
        [grid]
    );

    const resetCells = (grid, position) => {
        const resetedGrid = JSON.parse(JSON.stringify(grid));
        position.forEach((cellPosion) => {
            resetedGrid[cellPosion[0]][cellPosion[1]] = null;
        });
        return resetedGrid;
      };

    const resetSuccessiveNumbers = useCallback(
        (position) => {
            let resetedGrid = resetCells(grid, position);

            setGrid(resetedGrid);
        },
        [grid]
    );

    useEffect(() => {
        const successiveNumbers = ifSuccessiveNumbers(grid)
        if(successiveNumbers.length) {
            resetSuccessiveNumbers(successiveNumbers)
            console.log('successiveNumbers', successiveNumbers)
        }
    }, [grid, resetSuccessiveNumbers])
    
    return (
        <div className={styles.wrapper}>
            {grid.map((row, rowIndex) => (
                <Row 
                    key={rowIndex}
                    rowIndex={rowIndex}
                    row={row}
                    onClick={onCellClick}
                />
            ))}
        </div>
    )
}

export default Grid