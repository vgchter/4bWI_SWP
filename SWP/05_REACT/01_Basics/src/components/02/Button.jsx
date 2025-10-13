import React from 'react'

export default function Button({ text }) {
    return (
        <div className='bg-green-300 border-1 border-black w-30 h-13 rounded-sm text-center content-center hover:text-amber-50 hover:bg-green-800 hover:cursor-pointer hover:w-31 hover:h-14 hover:shadow-2xl'>
            {text}
        </div>
    )
}
