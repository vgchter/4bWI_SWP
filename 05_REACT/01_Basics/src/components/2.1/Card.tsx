import React, { useState } from 'react'

type Props = { name: string, description: string };

export default function Card({ name, description }: Props) {
    const [amountOfClicks, setamountOfClicks] = useState(0);
    let hello = "Hello " + name + "!";
    let style = amountOfClicks > 5 ? " bg-gray-400" : "";
    return (
        <div className={`border p-4 w-full hover:cursor-pointer ${style}`} onClick={() => {
            setamountOfClicks(amountOfClicks + 1);
        }}>
            <h1 className='font-extrabold text-2xl'>{hello}</h1>
            <p>{description}</p>
            <div>Amount of clicks: {amountOfClicks}</div>
        </div>
    )
}