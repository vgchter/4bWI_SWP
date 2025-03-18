import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-200 p-3 text-center text-xl">Hello</h1>
      <div className="grid grid-cols-2 sp gap-2 m-10">
        <Card name={"Herbert"} jobtitle={"Gärtner"} description={"In Rente"} />
        <Card name={"Rudolf"} jobtitle={"Sozialarbeiter"} description={"Bald in Rente"} />
      </div>
    </>
  )
}
export default App