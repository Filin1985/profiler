import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={styles.btn}>
            <button onClick={increment}>Click</button>
            <p>{count}</p>
        </div>
    )
}