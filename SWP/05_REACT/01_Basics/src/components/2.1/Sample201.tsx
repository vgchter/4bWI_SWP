import React from 'react'
import Card from './Card'

type Props = {}

export default function Sample201({ }: Props) {
  return (
    <>
      <div className='flex'>
        <Card name='David' description='Profi-Programmierer' />
        <Card name='Franz' description='Profi-Gärtner' />
        <Card name='Klaus' description='Profi-Maler' />
        <Card name='Rudolf' description='Profi-Schlosser' />
      </div>
    </>
  )
}