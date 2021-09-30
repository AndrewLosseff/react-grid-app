import React, { useState, useCallback, useMemo, useEffect } from 'react'
import styles from './Grid.module.css'
import Row from '../Row'
import { BASE_GRID, GRID_SIZE } from '../../helpers/consts'
import { ifSuccessiveNumbers, updateCellValueOnClick } from '../../helpers/functions'
import { fibonacciCalculator } from '../../helpers/fibonacciCalculator'


const Grid = () => {

    const [grid, setGrid] = useState(BASE_GRID)
    const [number] = useState(GRID_SIZE);

    const memoizedfibonacciCalculator = useMemo(() => fibonacciCalculator(number), [number]);

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
        const successiveNumbers = ifSuccessiveNumbers(grid, memoizedfibonacciCalculator)
        if(successiveNumbers.length) {
            resetSuccessiveNumbers(successiveNumbers)
        }
    }, [grid, resetSuccessiveNumbers, memoizedfibonacciCalculator])
    
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