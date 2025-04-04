import React, { useEffect } from 'react'
import Card from './Card'

type Props = {}

export default function PeopleContainer({ }: Props) {

    useEffect(() => {
        fetch("https://67b89061699a8a7baef48561.mockapi.io/person").then(res => res.json().then(data => { }))
    }, [])

    return (
        <div>
            <h1>People</h1>
            <div className='w-40'>
                <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300" />
                <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300" />
                <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300" />
            </div>
        </div>
    )
}