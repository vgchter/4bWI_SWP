import React from 'react'

type Props = {header: string}

export default function Header({header}: Props) {
  return (
        <div className='flex justify-center items-center font-semibold text-6xl'>{header}</div>
  )
}