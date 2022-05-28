import React from 'react'
import { useContext } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/EmptyDiv.module.css"

export default function EmptyDiv() {

    const { balloon, setBalloon, shootedBalloon, setShootedBalloon } = useContext(BalloonContext)

    const replace = (bln) => {

        balloon.splice(bln.id - 1, 0, bln)
        setBalloon(balloon)

        setShootedBalloon(shootedBalloon.filter((item) => item.id !== bln.id ))

        console.log("lol", balloon)
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
