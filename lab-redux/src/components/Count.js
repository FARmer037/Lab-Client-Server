import React, { useState } from 'react'

const Count = () => {
    const [number, setNumber] = useState(0)

    const add = () => {
        setNumber(number + 1)
    }

    const minus = () => {
        setNumber(number - 1)
    }
    return (
        <div>
            Count : {number} <br/>
            <button onClick={add} >+</button>
            <button onClick={minus} >-</button>

        </div>
    )
}

export default Count