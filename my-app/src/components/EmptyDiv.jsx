import React from 'react'
import { useContext } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/EmptyDiv.module.css"

export default function EmptyDiv() {

    const { balloon, setBalloon, shootedBalloon, setShootedBalloon } = useContext(BalloonContext)

    const replace = (bln) => {

        // replacing balloon to its original position.....
        let selectedBalloon = shootedBalloon.filter((item) => item.id === bln.id)
        let newBalloon = [...balloon, selectedBalloon[0]]
        newBalloon.sort((a,b) => a.id - b.id)
        setBalloon(newBalloon)

        // removing balloon from the shooted balloon div.....
        setShootedBalloon(shootedBalloon.filter((item) => item.id !== bln.id))
    }

  return (
    <div className={styles.main}>
        <h3>Shooted Balloon</h3>
        <div></div>
        <div>
            {shootedBalloon.map((item) => (
                <div key={item.id} style={{backgroundColor: item.color}} onClick={() => replace(item)}>

                </div>
            ))}
        </div>
    </div>
  )
}
