import Cell from "../Cell"

const Row = ({row, rowIndex}) => {
    return (
        <div>
           {row.map((cell, cellIndex) => (
               <Cell 
                    key={cellIndex}
                    cell={cell}
               />
           ))}
        </div>
    )
}

export default Row