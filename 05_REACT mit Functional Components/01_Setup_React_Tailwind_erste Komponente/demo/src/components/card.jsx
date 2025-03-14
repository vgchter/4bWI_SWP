import React from 'react'


export default function Card({ name, jobtitle, description }) {
    return (
        <div className="bg-orange-300 p-3 w-full m-10 text-center h-300 ">
            <p>{name}</p>
            <p>{jobtitle}</p>
            <p>{description}</p>
        </div>
    )
}
