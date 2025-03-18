import React from 'react'
import List from '../02/List'
import Button from './Button'

export default function Sample() {
    return (
        <div className='flex'>
            <div className="m-4">
                <List text={"Coffee"} />
                <List text={"Beer"} />
                <List text={"Tea"} />
            </div>


            <div className='m-4'>
                <Button text={"Sendar"} />
            </div>
        </div>
    )
}