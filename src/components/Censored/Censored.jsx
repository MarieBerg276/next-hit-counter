'use client'
import { useState } from "react"

function Censored({ children }) {
    const [isSensored, setIsSensored] = useState(true)

    return (
        <button className={isSensored ? 'censored' : undefined} onClick={() => { setIsSensored(!isSensored) }}>
            {children}
        </button>
    )
}

export default Censored