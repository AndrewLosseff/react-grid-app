import { useCallback, memo } from "react";
import styles from './Cell.module.css'

const Cell = ({cell, rowIndex, columnIndex, onClick}) => {

  const onCellClick = useCallback(() => {
    onClick(rowIndex, columnIndex);
  }, [rowIndex, columnIndex, onClick]);

  return (
      <div className={styles.wrapper} onClick={onCellClick}>
          {cell}
      </div>
  )
  
}

export const MemoizedCell = memo(Cell);