import React, { useState } from 'react'
import { useEffect } from 'react';
import Bottlepage from './Bottlepage';

type Props = {header: string, Orders:number}

export default function Header({header, Orders}: Props) {

  return (
    <div className='bg-gray-100 shadow-2xl relative flex justify-center items-center border-1 rounded-b-lg p-2'>
      <div className='absolute font-semibold pr-4 left-8'>Bag: {Orders}</div>
      <div className='font-semibold text-6xl'>{header}</div>
    </div>
  )
}