import React, { useEffect, useState } from 'react'
import Card from './Card'

type Props = {}

export default function PeopleContainer({ }: Props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://67b89061699a8a7baef48561.mockapi.io/person").then(
            (res) => res.json().then(data => {
                setPeople(data);
            })
        )
    }, [])

    return (
        <div>
            <h1>People</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}></Card>
                })}
            </div>
        </div>
    )
}