import React, {createContext, useState} from "react"

export const BalloonContext = createContext()

export const BalloonContextProvider = ({children}) => {

    const [balloon, setBalloon] = useState(null)
    const [shootedBalloon, setShootedBalloon] = useState([])

    console.log("balloon", balloon)
    console.log("shooted balloon", shootedBalloon)

    return (
        <BalloonContext.Provider value={{balloon, setBalloon, shootedBalloon, setShootedBalloon}}>
            {children}
        </BalloonContext.Provider>
    )
}