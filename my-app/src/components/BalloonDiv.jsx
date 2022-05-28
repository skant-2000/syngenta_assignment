import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { BalloonContext } from '../context/BalloonContext'
import styles from "../styles/BalloonDiv.module.css"

export default function BalloonDiv() {

    const {balloon, setBalloon} = useContext(BalloonContext)
    
    useEffect(() => {

        // Generating balloons with unique random color.....
        let balloons = []

        for ( let i = 1; i <= 5; i++ ) {
            function hexCodeFunc () {
                const hexCode = "#" + Math.floor(Math.random() * 16777215).toString(16)

                let alreadyPresent = false
                
                for ( let j = 0; j < balloons.length; j++ ) {
                    if ( balloons[j].color === hexCode ) {
                        alreadyPresent = true
                    }
                }

                if ( alreadyPresent === true ) {
                    hexCodeFunc()
                }
                else {
                    balloons.push({id: i, color: hexCode})
                }
            }

            hexCodeFunc()
        }

        setBalloon(balloons)
    }, [])

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
