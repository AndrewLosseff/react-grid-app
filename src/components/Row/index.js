import Cell from "../Cell"

const Row = ({row, rowIndex, onClick}) => {
    return (
        <div>
           {row.map((cell, columnIndex) => (
               <Cell 
                    key={columnIndex}
                    cell={cell}
                    onClick={onClick}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
               />
           ))}
        </div>
    )
}

export default Row