import React from 'react'

export default function List({ text }) {
    return (
        <div className='bg-emerald-500 border-1 border-gray-500 text-amber-50 rounded-sm w-30 h-10 content-center text-center grid-cols-1 grid-rows-3 m-0.5 hover:bg-emerald-600 hover:shadow-2xl hover:cursor-pointer hover:w-31 hover:h-11'>
            {text}
        </div>
    )
}