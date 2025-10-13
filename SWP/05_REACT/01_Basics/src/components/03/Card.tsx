import React from 'react'

type Props = { name, title, imageUri }

export default function Card({ name, title, imageUri }: Props) {
    return (
        <div className='border-1 grid grid-cols-2 h-40'>
            <div className='p-3'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <h4>{title}</h4>
            </div>
            <div className='w-full'>
                <img src={imageUri} alt="" className='object-cover w-full h-full' />
            </div>
        </div>
    )
}