import React from 'react'
import styles from "../styles/ShooterDiv.module.css"

export default function ShooterDiv() {
  return (
    <div className={styles.main}>
        <input type="number" placeholder='shoot any balloon' />
        <button>Shoot</button>
    </div>
  )
}
