import React from 'react'
import Card from '../01/card'

export default function Sample() {
    return (

        <div className="grid grid-cols-2 sp gap-2 m-10">
            <Card name={"Herbert"} jobtitle={"Gärtner"} description={"In Rente"} />
            <Card name={"Rudolf"} jobtitle={"Sozialarbeiter"} description={"Bald in Rente"} />
        </div>
    )
}
