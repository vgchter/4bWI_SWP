import React from 'react'
import List from '../02/List'
import Button from './Button'
import Card from './Card'

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

            <div className='m-1'>
                <Card avatar="src/assets/Job.png" Name={"Max Mustermann"} Job={"Kfz-Mechaniker"} />
            </div>

        </div>
    )
}