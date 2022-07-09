import React, {useState} from 'react'
import styles from './square.module.css'

const Square = ({val,chooseSquare}) => {
    return <button className={styles.square} onClick={chooseSquare}>{val}</button>
}

export default Square;