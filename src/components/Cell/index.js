import styles from './Cell.module.css'

const Cell = ({cell}) => {
    return (
        <div className={styles.wrapper}>
            {cell}
        </div>
    )
}

export default Cell