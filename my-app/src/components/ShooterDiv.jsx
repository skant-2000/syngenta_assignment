import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/ShooterDiv.module.css"

export default function ShooterDiv() {

    const { balloon, setBalloon, shootedBalloon, setShootedBalloon } = useContext(BalloonContext)

    const [shootPosition, setShootPosition] = useState("")

    // handling shoot button action.....
    const handleShootButton = () => {

        if ( shootPosition === "" ) {
            alert("please enter which balloon you want to shoot")
        }
        else if ( shootPosition <= 0 || shootPosition > balloon.length ) {
            alert("this balloon doesn't exist, shoot in range")
        }
        else {
            let balloonToRemove = balloon[shootPosition-1].color

            // adding balloon to shooted balloon div.....
            let filteredBalloon = balloon.filter((item) => item.color === balloonToRemove)
            setShootedBalloon([...shootedBalloon, filteredBalloon[0]])

            // removing balloon from the main balloon div.....
            setBalloon(balloon.filter((item) => item.color !== balloonToRemove))
        }

        setShootPosition("")
    }


  return (
    <div className={styles.main}>
        <input type="number" placeholder='shoot any balloon' value={shootPosition} onChange={(e) => setShootPosition(e.target.value)} />
        <button onClick={handleShootButton}>Shoot</button>
    </div>
  )
}
