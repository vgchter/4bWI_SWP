import React from 'react'


export default function Card({ name, jobtitle, description }) {
    return (
        <div className="bg-orange-300 p-3 w-full text-center h-70 border-1 ">
            <p>{name}</p>
            <p>{jobtitle}</p>
            <p>{description}</p>
        </div>
    )
}
