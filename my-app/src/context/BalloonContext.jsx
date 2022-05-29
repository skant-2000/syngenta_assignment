import React, {createContext, useState} from "react"

export const BalloonContext = createContext()

export const BalloonContextProvider = ({children}) => {

    // state of balloons with random unique color.....
    const [balloon, setBalloon] = useState(null)

    // empty div balloon's state.....
    const [shootedBalloon, setShootedBalloon] = useState([])

    return (
        <BalloonContext.Provider value={{balloon, setBalloon, shootedBalloon, setShootedBalloon}}>
            {children}
        </BalloonContext.Provider>
    )
}