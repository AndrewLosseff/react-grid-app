import React, { useState, useCallback } from 'react'
import styles from './Grid.module.css'
import Row from '../Row'
import { BASE_GRID } from '../../helpers/consts'
import { updateCellValueOnClick } from '../../helpers/functions'


const Grid = () => {

    const [grid, setGrid] = useState(BASE_GRID)

    const onCellClick = useCallback(
        (rowIndex, columnIndex) => {
          let newGrid = updateCellValueOnClick(grid, rowIndex, columnIndex);
          setGrid(newGrid);
        },
        [grid]
      );
    
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