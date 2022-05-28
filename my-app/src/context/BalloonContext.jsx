import React, {createContext, useState} from "react"

export const BalloonContext = createContext()

export const BalloonContextProvider = ({children}) => {

    const [balloon, setBalloon] = useState(null)

    return (
        <BalloonContext.Provider value={{balloon, setBalloon}}>
            {children}
        </BalloonContext.Provider>
    )
}