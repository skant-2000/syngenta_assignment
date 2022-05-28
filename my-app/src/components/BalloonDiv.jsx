import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/BalloonDiv.module.css"

export default function BalloonDiv() {

    const {balloon, setBalloon} = useContext(BalloonContext)
    
    useEffect(() => {

        // Generating balloons with random color

        let balloons = []

        for ( let i = 1; i <= 5; i++ ) {
            const hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16)
            balloons.push({id: i, color: hexCode})
        }
        setBalloon(balloons)
    }, [])

    console.log(balloon)

  return (
    <>
    {balloon ? (
        <div className={styles.main}>
            {balloon.map((item) => (
                <div key={item.id} style={{backgroundColor: item.color}}>

                </div>
            ))}
    </div>
    ) : null}
    </>
  )
}
