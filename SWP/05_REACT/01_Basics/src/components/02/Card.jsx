import React from 'react'


export default function Card({ Name, Job, avatar }) {
    return (
        <div className='p-5 rounded-2xl shadow-2xl text-center italic'>
            <img className='rounded-2xl size-96 border-4 border-gray-300' src={avatar} />
            <p className='font-bold text-2xl'>{Name}</p>
            <p className='font-light'>{Job}</p>
        </div>
    )
}
