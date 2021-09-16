import React, { useState } from 'react'
import styles from './Grid.module.css'
import { BASE_GRID } from '../../helpers/consts'
import Row from '../Row'



const Grid = () => {

    const [grid, setGrid] = useState(BASE_GRID)
    
    return (
        <div className={styles.wrapper}>
            {grid.map((row, rowIndex) => (
                <Row 
                    key={rowIndex}
                    indrowIndexex={rowIndex}
                    row={row}
                />
            ))}
        </div>
    )
}

export default Grid