import React, { useState } from 'react'

const Place = (props) => {
    const [address, setAddress] = useState('Address')
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.img} />
            <p>{props.discription}</p>
            <p onClick={() => setAddress(props.address)}>{address}</p>
        </div>
    )
}

export default Place