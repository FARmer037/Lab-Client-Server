import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Bear = () => {
    const [bears, setBears] = useState({})
    const [name, setName] = useState('')
    const [weight, setWeight] = useState(0)

    useEffect(() => {
        getBears()
    }, [])

    const getBears = async () => {
        const result = await axios.get(`http://localhost/api/bears`)
        console.log(result.data)
        setBears(result.data)
    }

    const addBear = async () => {
        const result = await axios.post('http://localhost/api/bears', {
            name,
            weight
        })
        console.log(result)
        getBears()
    }

    const getBear = async (id) => {
        const result = await axios.get(`http://localhost/api/bears/${id}`)
        setName(result.data.name)
        setWeight(result.data.weight)
    }

    const printBears = () => {
        if (bears && bears.length) {
            return bears.map((bear, index) => {
                return (
                    <li key={index}>
                        {bear.name} : {bear.weight}
                        <button onClick={getBear(bear.id)}>Get</button>
                    </li>
                )
            })
        }
        else {
            return (
                <h1>No Bears</h1>
            )
        }

    }

    return (
        <div>
            Bears
            <ul>
                {printBears()}
            </ul>

            <h2>Add Bear</h2>
            Name:
            <input
                placeholder="name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
            />
            Weight:
            <input
                placeholder="weight"
                type="text"
                name="weight"
                onChange={(e) => setWeight(e.target.value)}
            />

            <button onClick={addBear}>Add new bear</button>
        </div>
    )
}

export default Bear