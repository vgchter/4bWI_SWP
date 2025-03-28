import React, { useState } from 'react'

type Props = { name: string, description: string };

export default function Card({ name, description }: Props) {
    const [amountOfClicks, setamountOfClicks] = useState(0);
    let hello = "Hello " + name + "!";
    return (
        <div className='border p-4' onClick={() => {
            alert("you clicked")
        }}>
            <h1 className='font-extrabold text-2xl'>{hello}</h1>
            <p>{description}</p>
            <div>Amount of clicks: {amountOfClicks}</div>
        </div>
    )
}