import React, { useEffect, useState } from 'react'

export default function Effects() {
    const [title, setTitle] = useState('PNY')
    const [count, setCount] = useState(0)
    const [timestamp, setTimestamp] = useState(Date.now())

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
            setTitle("REACT Hooks Count: " + count)
            document.title = "REACT " + count

            const currentTimestamp = Date.now()
            setTimestamp(currentTimestamp)
        }, 1000)
    })



    return (
        <div>
            <h1 style={{ "font-family": "Brush Script MT", }} >EFFECTS</h1>
            <hr />
            <h2>{timestamp}</h2>
            <hr />
            <h2>{title}</h2>
        </div>
    )
}
