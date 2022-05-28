import React from 'react'
import { useContext } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/EmptyDiv.module.css"

export default function EmptyDiv() {

    const { shootedBalloon } = useContext(BalloonContext)

    const replace = (item) => {
        console.log(item)
        console.log("x")
    }

  return (
    <div className={styles.main}>
        <h3>Shooted Balloon</h3>
        <div>
            {shootedBalloon.map((item) => (
                <div key={item.id} style={{backgroundColor: item.color}} onClick={() => replace(item)}>

                </div>
            ))}
        </div>
    </div>
  )
}
